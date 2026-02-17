import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper, Box, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Traemos el repartidor con sus paquetes incluidos
        const response = await api.get(`/repartidores/${id}`);
        setRepartidor(response.data);
        
        // Ordenamos los paquetes por 'ordenEntrega' para la Polyline y la lista
        const ordenados = response.data.paquetes.sort((a, b) => a.ordenEntrega - b.ordenEntrega);
        setPaquetes(ordenados);
      } catch (error) {
        console.error("Error al cargar el recorrido:", error);
      }
    };
    fetchData();
  }, [id]);

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
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Hoja de Ruta: {repartidor.nombre}
      </Typography>

      <Grid container spacing={2}>
        {/* IZQUIERDA: MAPA */}
        <Grid size={8} sx={{ display: 'flex' }}>
            <Paper
                elevation={3}
                sx={{
                flexGrow: 1,
                height: '75vh',
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

                    {paquetes.map((p) => (
                        <Marker key={p.id} position={[p.latitud, p.longitud]}>
                        <Popup><strong>{p.destinatario}</strong></Popup>
                        </Marker>
                    ))}

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
        <Grid size={4}>
          <Paper elevation={3} sx={{ height: '70vh', overflowY: 'auto', p: 2 }}>
            <Typography variant="h6" gutterBottom>Orden de Entrega</Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {paquetes.map((p) => (
                <React.Fragment key={p.id}>
                  <ListItem alignItems="flex-start">
                    <Box sx={{ mr: 2 }}>
                      <Chip label={p.ordenEntrega} color="primary" variant="outlined" />
                    </Box>
                    <ListItemText
                      primary={p.destinatario}
                      secondaryTypographyProps={{ component: 'div' }}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.primary">
                            {p.direccion}
                          </Typography>
                          <br />
                          <Chip 
                            label={p.estado} 
                            size="small" 
                            color={p.estado === 'ENTREGADO' ? 'success' : 'warning'} 
                            sx={{ mt: 1 }}
                          />
                        </>
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