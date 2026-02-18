import React, { useEffect, useState } from 'react';
import { 
  Container, Typography, Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, IconButton, Box 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';
import api from '../api/api';
import RepartidorForm from '../components/RepartidorForm';
import Buscador from '../components/Buscador';

const RepartidoresPage = () => {
    const [repartidores, setRepartidores] = useState([]);
    const navigate = useNavigate();
    const [formOpen, setFormOpen] = useState(false);
    const [repartidorAEditar, setRepartidorAEditar] = useState(null);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // 1. Cargar repartidores

    useEffect(() => {
        const fetchRepartidores = async () => {
            try {
                const response = await api.get('/repartidores');
                setRepartidores(response.data);
            } catch (error) {
                console.error("Error al obtener repartidores:", error);
            }
        };
        fetchRepartidores();
    }, []);

    const handleSaveRepartidor = async (data) => {
        try {
            const payload = {
                nombre: data.nombre,
                telefono: data.telefono,
            };
            if (repartidorAEditar) {
                await api.patch(`/repartidores/${repartidorAEditar.id}`, payload);
            } else {
                await api.post('/repartidores', payload);
            }
            const response = await api.get('/repartidores');
            setRepartidores(response.data);
            setFormOpen(false);
        } catch (error) {
            console.error("Error al guardar repartidor:", error);
            alert("Error al guardar repartidor");
        }
    };

    const handleOpenCrear = () => {
        setRepartidorAEditar(null);
        setFormOpen(true);
    };

    const handleOpenEditar = (rep) => {
        setRepartidorAEditar({
            id: rep.id,
            nombre: rep.nombre ?? '',
            telefono: rep.telefono ?? '',
        });
        setFormOpen(true);
    };

    const repartidoresFiltrados = repartidores.filter((r) => 
        r.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        r.vehiculo.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

  // 2. Función para eliminar
    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este repartidor?")) {
        try {
            await api.delete(`/repartidores/${id}`);
            setRepartidores(prev =>
            prev.filter(repartidor => repartidor.id !== id)
            ); 
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
        }
    };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Buscador 
            placeholder="Buscar por nombre..." 
            onBusqueda={setTerminoBusqueda} 
        />
      <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Repartidores
        </Typography>
        <Button onClick={handleOpenCrear} variant="contained" color="primary">
          Nuevo Repartidor
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3, overflow: 'auto' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#2c3e50' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Teléfono</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repartidoresFiltrados.map((rep) => (
              <TableRow key={rep.id} hover>
                <TableCell>{rep.nombre}</TableCell>
                <TableCell>{rep.telefono || 'Sin teléfono'}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <Button 
                    startIcon={<MapIcon />}
                    variant="outlined" 
                    color="secondary" 
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => navigate(`/recorrido/${rep.id}`)}
                  >
                    Ver Hoja de Ruta
                  </Button>
                  
                  <IconButton color="info" size="small" onClick={() => handleOpenEditar(rep)}>
                    <EditIcon />
                  </IconButton>
                  
                  <IconButton color="error" size="small" onClick={() => handleDelete(rep.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <RepartidorForm 
        key={repartidorAEditar?.id || 'nuevo'}
        open={formOpen} 
        onClose={() => setFormOpen(false)} 
        onSave={handleSaveRepartidor}
        repartidorInicial={repartidorAEditar}
      />
    </Container>
  );
};

export default RepartidoresPage;