import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Card, CardContent, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import api from '../api/api';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totales: 0,
        entregados: 0,
        pendientes: 0,
        repartidores: 0,
    });
    const [topRepartidor, setTopRepartidor] = useState({ nombre: "Cargando...", entregas: 0 });
    const [ultimosPaquetes, setUltimosPaquetes] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
            const [resPaquetes, resRepartidores] = await Promise.all([
            api.get('/paquetes'),
            api.get('/repartidores')
            ]);

            const paquetes = resPaquetes.data;
            const repartidores = resRepartidores.data;
            setStats({
            totales: paquetes.length,
            entregados: paquetes.filter(p => p.estado === 'ENTREGADO').length,
            pendientes: paquetes.filter(p => p.estado !== 'ENTREGADO').length,
            repartidores: repartidores.length
            });
            setUltimosPaquetes(paquetes.slice(-5).reverse());
            if (repartidores.length > 0) {
                const ranking = repartidores.map(rep => ({
                    nombre: rep.nombre,
            
                    entregas: paquetes.filter(p => p.repartidorId === rep.id && p.estado === 'ENTREGADO').length
                }));
            const mejor = ranking.sort((a, b) => b.entregas - a.entregas)[0];
            setTopRepartidor(mejor);
            }
        } catch (error) {
        console.error("Error cargando estadísticas:", error);
      }
    };
    fetchStats();
  }, []);

  // Calculamos el porcentaje de éxito
  const porcentajeExito = stats.totales > 0 
    ? Math.round((stats.entregados / stats.totales) * 100) 
    : 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Panel de Control
      </Typography>

      <Grid container spacing={3}>
        {/* Tarjetas de Resumen */}
        <StatCard title="Paquetes Totales" value={stats.totales} icon={<InventoryIcon color="primary" />} />
        <StatCard title="Entregados" value={stats.entregados} icon={<CheckCircleIcon color="success" />} />
        <StatCard title="En Proceso" value={stats.pendientes} icon={<PendingActionsIcon color="warning" />} />
        <StatCard title="Repartidores" value={stats.repartidores} icon={<LocalShippingIcon color="info" />} />

        {/* Gráfico de Progreso Visual */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 240, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom>Eficiencia de Entregas</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
               <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  {/* Aquí simulamos un gráfico circular con CSS o MUI */}
                  <Typography variant="h2" component="div" color="text.secondary">
                    {porcentajeExito}%
                  </Typography>
               </Box>
               <Box sx={{ ml: 4 }}>
                  <Typography variant="body1">Tasa de finalización actual</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Basado en {stats.totales} envíos registrados.
                  </Typography>
               </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, height: 300, borderRadius: 3, bgcolor: '#1a237e', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <LocalShippingIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" sx={{ opacity: 0.8 }}>Líder de Entregas</Typography>
                <Typography variant="h4" sx={{ my: 1, fontWeight: 'bold' }}>
                    {topRepartidor.nombre}
                </Typography>
                <Box sx={{ mt: 2, bgcolor: 'rgba(255,255,255,0.2)', px: 3, py: 1, borderRadius: 10 }}>
                    <Typography variant="h5">{topRepartidor.entregas} Envíos</Typography>
                </Box>
                <Typography variant="caption" sx={{ mt: 2, opacity: 0.6 }}>
                    Basado en el historial de entregas finalizadas
                </Typography>
            </Paper>
        </Grid>

        <Grid size={{ xs: 12 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Últimos Paquetes Registrados</Typography>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell>Destinatario</TableCell>
                            <TableCell>Dirección</TableCell>
                            <TableCell>Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ultimosPaquetes.map((p) => (
                            <TableRow key={p.id} hover>
                                <TableCell sx={{ fontWeight: 'bold' }}>{p.codigoEnvio}</TableCell>
                                <TableCell>{p.destinatario}</TableCell>
                                <TableCell>{p.direccion}</TableCell>
                                <TableCell>
                                <Chip 
                                    label={p.estado} 
                                    size="small" 
                                    color={p.estado === 'ENTREGADO' ? 'success' : 'warning'} 
                                    variant="outlined"
                                />
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

// Sub-componente para las tarjetas para no repetir código
const StatCard = ({ title, value, icon }) => (
  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography color="textSecondary" variant="overline">{title}</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{value}</Typography>
        </Box>
        <Box sx={{ bgcolor: '#f0f4f8', p: 1, borderRadius: 2, display: 'flex' }}>
          {icon}
        </Box>
      </CardContent>
    </Card>
  </Grid>
);

export default Dashboard;