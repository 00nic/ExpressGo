import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Buscador = ({ placeholder, onBusqueda }) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder || "Buscar..."}
      variant="outlined"
      size="small"
      onChange={(e) => onBusqueda(e.target.value)}
      sx={{ mb: 3, 
            maxWidth: 400,
            backgroundColor: 'white',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#e0e0e0', 
                },
                '&:hover fieldset': {
                    borderColor: 'primary.main', 
      },
    },
            }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Buscador;