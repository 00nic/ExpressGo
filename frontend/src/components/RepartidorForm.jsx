import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  TextField, Grid, Button 
} from '@mui/material';

const RepartidorForm = ({ open, onClose, onSave, repartidorInicial }) => {
  const [formData, setFormData] = useState(
    repartidorInicial ?
    {   nombre: repartidorInicial.nombre ?? '', 
        telefono: repartidorInicial.telefono ?? ''
    } :
    { nombre: '', telefono: '' }
  );

  {/*useEffect(() => {
    if (open) {
      if (repartidorInicial) {
        setFormData({
          nombre: repartidorInicial.nombre ?? '',
          telefono: repartidorInicial.telefono ?? '',
        });
      } else {
        setFormData({ nombre: '', 
                    telefono: ''});
      }
    }
  }, [open, repartidorInicial]); */}

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Aquí podrías agregar validaciones básicas antes de enviar
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} disableRestoreFocus maxWidth="xs" fullWidth>
      <DialogTitle>{repartidorInicial ? 'Editar Repartidor' : 'Nuevo Repartidor'}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12 }}>
            <TextField 
              id="nombre" name="nombre" label="Nombre Completo" 
              fullWidth value={formData.nombre} onChange={handleChange} 
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField 
              id="telefono" name="telefono" label="Teléfono" 
              fullWidth value={formData.telefono} onChange={handleChange} 
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RepartidorForm;