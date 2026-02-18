import React, { useState, useEffect } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, MenuItem, Grid, Button 
} from '@mui/material';
import api from '../api/api';

const PaqueteForm = ({ open, onClose, onSave, paqueteInicial }) => {
  const [formData, setFormData] = useState({
    codigoEnvio: '',
    direccion: '',
    destinatario: '',
    tamano: 'MEDIANO',
    estado: 'PENDIENTE',
    latitud: '',
    longitud: '',
    ordenEntrega: 1,
    repartidorId: ''
  });

  const [repartidores, setRepartidores] = useState([]);

  // Cada vez que se abre el modal, cargamos repartidores y datos previos
  useEffect(() => {
    if (open) {
      const loadData = async () => {
        const res = await api.get('/repartidores');
        setRepartidores(res.data);
        
        // Si hay un paquete para editar, precargamos los campos
        if (paqueteInicial) {
          setFormData({
            codigoEnvio: paqueteInicial.codigoEnvio ?? '',
            direccion: paqueteInicial.direccion ?? '',
            destinatario: paqueteInicial.destinatario ?? '',
            tamano: paqueteInicial.tamano ?? 'MEDIANO',
            estado: paqueteInicial.estado ?? 'PENDIENTE',
            latitud: paqueteInicial.latitud ?? '',
            longitud: paqueteInicial.longitud ?? '',
            ordenEntrega: paqueteInicial.ordenEntrega ?? 1,
            repartidorId: paqueteInicial.repartidor?.id ?? paqueteInicial.repartidorId ?? ''         });
        } else {
          // Si es nuevo, reseteamos el formulario
          setFormData({
            codigoEnvio: '', direccion: '', destinatario: '', 
            tamano: 'MEDIANO', estado: 'PENDIENTE', 
            latitud: '', longitud: '', ordenEntrega: 1, repartidorId: ''
          });
        }
      };
      loadData();
    }
  }, [open, paqueteInicial]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validamos y enviamos los datos procesados al padre (PaquetesPage)
    const procesados = {
      ...formData,
      latitud: parseFloat(formData.latitud),
      longitud: parseFloat(formData.longitud),
      ordenEntrega: parseInt(formData.ordenEntrega)
    };
    onSave(procesados);
  };

  return (
    <Dialog open={open} onClose={onClose} disableRestoreFocus maxWidth="sm" fullWidth>
      <DialogTitle>{paqueteInicial ? 'Editar Paquete' : 'Nuevo Paquete'}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 6 }}>
            <TextField id="codigoEnvio" label="Código" name="codigoEnvio" fullWidth value={formData.codigoEnvio} onChange={handleChange} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField id="destinatario" label="Destinatario" name="destinatario" fullWidth value={formData.destinatario} onChange={handleChange} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField id="direccion" label="Dirección" name="direccion" fullWidth value={formData.direccion} onChange={handleChange} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField id="tamano" select label="Tamaño" name="tamano" fullWidth value={formData.tamano} onChange={handleChange}>
              <MenuItem value="CHICO">Pequeño</MenuItem>
              <MenuItem value="MEDIANO">Mediano</MenuItem>
              <MenuItem value="GRANDE">Grande</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField id="repartidorId" select label="Repartidor" name="repartidorId" fullWidth value={formData.repartidorId} onChange={handleChange}>
              {repartidores.map(r => <MenuItem key={r.id} value={r.id}>{r.nombre}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid size={{ xs: 4 }}><TextField id="latitud" label="Lat" name="latitud" type="number" fullWidth value={formData.latitud} onChange={handleChange} /></Grid>
          <Grid size={{ xs: 4 }}><TextField id="longitud" label="Long" name="longitud" type="number" fullWidth value={formData.longitud} onChange={handleChange} /></Grid>
          <Grid size={{ xs: 4 }}><TextField id="ordenEntrega" label="Orden" name="ordenEntrega" type="number" fullWidth value={formData.ordenEntrega} onChange={handleChange} inputProps={{ min: 1 }}/></Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaqueteForm;