import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RepartidoresPage from './pages/RepartidoresPage';
import PaquetesPage from './pages/PaquetesPage';
import RecorridoPage from './pages/RecorridoPage';
import Dashboard from './pages/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1a237e',
      },
      secondary: {
        main: '#ff9800',
      },
      success: {
        main: '#2e7d32',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // Fuente más moderna
      h4: { fontWeight: 700 },
    },
    shape: {
      borderRadius: 12, // Bordes redondeados en todos los componentes
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/repartidores" element={<RepartidoresPage />} />
          <Route path="/paquetes" element={<PaquetesPage />} />
          <Route path="/recorrido/:id" element={<RecorridoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;