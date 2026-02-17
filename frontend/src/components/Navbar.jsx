import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" sx={{ mb: 3 }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        EXPRESSGO
      </Typography>
      <Box>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/repartidores">Repartidores</Button>
        <Button color="inherit" component={Link} to="/paquetes">Paquetes</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;