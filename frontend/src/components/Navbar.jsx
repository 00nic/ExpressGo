import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" sx={{ bgcolor: 'primary.main', mb: 4 }}>
    <Toolbar>
        <LocalShippingIcon sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
        <Typography variant="h6" noWrap component="a" href='/' sx={{ mr:2, display: {xs: 'flex', md:'flex'}, fontWeight: 800, letterSpacing: '.2rem', color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            EXPRESS<span style={{ color: '#ff9800' }}>GO</span>
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