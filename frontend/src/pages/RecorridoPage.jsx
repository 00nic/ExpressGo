import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper, Box, List, ListItem, ListItemText, Chip, Divider, Button } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import api from '../api/api';

// Corrección para los iconos de Leaflet en React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const RecorridoPage = () => {
  const { id } = useParams(); // Obtenemos el ID del repartidor de la URL
  const [repartidor, setRepartidor] = useState(null);
  const [paquetes, setPaquetes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Traemos el repartidor con sus paquetes incluidos
        const response = await api.get(`/repartidores/${id}`);
        setRepartidor(response.data);
        
        const pendientes = response.data.paquetes.filter(p => p.estado !== 'ENTREGADO');

        // Ordenamos los paquetes por 'ordenEntrega' para la Polyline y la lista
        const ordenados = pendientes.sort((a, b) => a.ordenEntrega - b.ordenEntrega);
        setPaquetes(ordenados);
      } catch (error) {
        console.error("Error al cargar el recorrido:", error);
      }
    };
    fetchData();
  }, [id]);

    const handleCambiarEstado = async (paqueteId, nuevoEstado) => {
        try {
            // 1. Petición al backend
            await api.patch(`/paquetes/${paqueteId}`, { estado: nuevoEstado });
            
            // Si el nuevo estado es ENTREGADO, lo quitamos de la vista actual
            if (nuevoEstado === 'ENTREGADO') {
                setPaquetes(prev => prev.filter(p => p.id !== paqueteId));
                setSelectedId(null); // Limpiamos selección si justo era ese
            } else {
                // Si es otro estado (ej: EN_CAMINO), solo lo actualizamos
                setPaquetes(prev => prev.map(p => 
                p.id === paqueteId ? { ...p, estado: nuevoEstado } : p
                ));
            }
        } catch (error) {
            console.error("Error al actualizar estado:", error);
            alert("No se pudo actualizar el estado del paquete.");
        }
    };

    const ResizeFix = () => {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
        map.invalidateSize();
        }, 200);
    }, [map]);
    return null;
    };

  // Creamos el array de coordenadas para la Polyline [[lat, lng], [lat, lng]...]
  const posicionesPolyline = paquetes.map(p => [p.latitud, p.longitud]);

  if (!repartidor) return <Typography>Cargando recorrido...</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb:8, px: { xs: 2, md: 4}}}>
      <Typography variant="h4" gutterBottom>
        Hoja de Ruta: {repartidor.nombre}
      </Typography>

      <Grid container spacing={4}>
        {/* IZQUIERDA: MAPA */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex' }}>
            <Paper
                elevation={3}
                sx={{
                flexGrow: 1,
                height: '600px',
                position: 'relative'
                }}
            >
                <MapContainer
                    center={
                        posicionesPolyline.length > 0
                        ? posicionesPolyline[0]
                        : [-32.8894, -68.8458]
                    }
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    whenCreated={(map) => {
                        setTimeout(() => {
                        map.invalidateSize();
                        }, 300);
                    }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />

                    {paquetes.map((p) => {
                        const customIcon = L.divIcon({
                            className: 'custom-div-icon',
                            html: `<div style="background-color:#1976d2; color:white; border-radius:50%; width:25px; height:25px; display:flex; align-items:center; justify-content:center; border:2px solid white; font-weight:bold; box-shadow: 0 2px 5px rgba(0,0,0,0.3)">${p.ordenEntrega}</div>`,
                            iconSize: [25, 25],
                            iconAnchor: [12, 12]
                        });
                
                        return (
                            <Marker key={p.id} 
                                    position={[p.latitud, p.longitud]} 
                                    icon={customIcon}
                                    eventHandlers={{ click: () => setSelectedId(p.id) }}
                                    >
                                <Popup><strong>{p.destinatario}</strong></Popup>
                            </Marker>
                        );
                    })}

                    {posicionesPolyline.length > 1 && (
                        <Polyline 
                            positions={posicionesPolyline} 
                            color="#1976d2" 
                            weight={5} 
                            opacity={0.7} 
                            dashArray="10, 10" 
                        />
                    )}

                </MapContainer>
            </Paper>
        </Grid>

        {/* DERECHA: LISTA ORDENADA */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ height: '70vh', overflowY: 'auto', p: 2 }}>
            <Typography variant="h6" gutterBottom>Orden de Entrega</Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {paquetes.map((p) => (
                <React.Fragment key={p.id}>
                  <ListItem alignItems="flex-start"
                            key={p.id} 
                            sx={{ 
                                backgroundColor: selectedId === p.id ? '#e3f2fd' : 'transparent',
                                transition: '0.3s',
                                borderLeft: selectedId === p.id ? '5px solid #1976d2' : 'none'
                            }}
                            //button // Esto lo hace clickeable
                            //onClick={() => setSelectedId(p.id)}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Chip label={p.ordenEntrega} color="primary" variant="outlined" />
                    </Box>
                    <ListItemText
                      primary={p.destinatario}
                      secondaryTypographyProps={{ component: 'div' }}
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.primary">
                            {p.direccion}
                          </Typography>
                            <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Chip 
                                    label={p.estado} 
                                    size="small" 
                                    color={p.estado === 'ENTREGADO' ? 'success' : 'warning'} 
                                    sx={{ mt: 1 }}
                                /> 
                                {p.estado !== 'ENTREGADO' && (
                                    <Button 
                                        size="small" 
                                        variant="contained" 
                                        color="success"
                                        onClick={(e) => {
                                        e.stopPropagation(); // Evita que se dispare el click del ListItem
                                        handleCambiarEstado(p.id, 'ENTREGADO');
                                        }}
                                        sx={{ fontSize: '0.65rem', py: 0 }}
                                    >
                                        Marcar Entregado
                                    </Button>
                                )}
                            </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
              {paquetes.length === 0 && (
                <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
                  Este repartidor no tiene paquetes asignados.
                </Typography>
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecorridoPage;