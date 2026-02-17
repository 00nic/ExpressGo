import React, { useEffect, useState } from 'react';
import { 
  Container, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, IconButton, Chip, Box, Tooltip 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';
import api from '../api/api';

const PaquetesPage = () => {
  const [paquetes, setPaquetes] = useState([]);

  // Carga todos los paquetes de la DB

  useEffect(() => {
        const fetchPaquetes = async () => {
            try {
            const response = await api.get('/paquetes');
            setPaquetes(response.data);
            } catch (error) {
            console.error("Error al cargar paquetes:", error);
            }
        };
        fetchPaquetes();
  }, []);

  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este paquete? Esta acción no se puede deshacer.")) {
      try {
        await api.delete(`/paquetes/${id}`);
        setPaquetes(prev => prev.filter(paquete => paquete.id !== id));
      } catch (error) {
        alert("Error al eliminar el paquete", error);
      }
    }
  };

  // Función para determinar el color del Chip según el estado
  const getEstadoStyle = (estado) => {
    switch (estado) {
      case 'ENTREGADO': return { color: 'success', label: 'Entregado' };
      case 'EN_CAMINO': return { color: 'info', label: 'En Camino' };
      default: return { color: 'warning', label: 'Pendiente' };
    }
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Paquetes
        </Typography>
        <Box>
          {/*<IconButton onClick={fetchPaquetes} sx={{ mr: 2 }}>
            <RefreshIcon />
          </IconButton>*/}
          <Button variant="contained" color="primary" size="large">
            Nuevo Paquete
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#2c3e50' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Cod. Envío</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Destinatario</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Dirección</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Repartidor</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Prioridad</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tamaño</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Estado</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paquetes.map((p) => {
              const style = getEstadoStyle(p.estado);
              return (
                <TableRow key={p.id} hover>
                  <TableCell sx={{ fontWeight: 'medium' }}>{p.codigoEnvio}</TableCell>
                  <TableCell>{p.destinatario}</TableCell>
                  <TableCell>{p.direccion}</TableCell>
                  <TableCell>
                    {p.repartidor ? (
                      <Chip label={p.repartidor.nombre} size="small" variant="outlined" />
                    ) : (
                      <Typography variant="caption" color="error">No asignado</Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2">#{p.ordenEntrega}</Typography>
                  </TableCell>
                  <TableCell>{p.tamano}</TableCell>
                  <TableCell>
                    <Chip 
                      label={style.label} 
                      color={style.color} 
                      size="small" 
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Editar">
                      <IconButton color="primary"><EditIcon /></IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                      <IconButton color="error" onClick={() => handleEliminar(p.id)}><DeleteIcon /></IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {paquetes.length === 0 && (
          <Box p={4} textAlign="center">
            <Typography color="textSecondary">No hay paquetes registrados en el sistema.</Typography>
          </Box>
        )}
      </TableContainer>
    </Container>
  );
};

export default PaquetesPage;