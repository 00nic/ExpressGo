// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RepartidoresPage from './pages/RepartidoresPage';
import PaquetesPage from './pages/PaquetesPage';
import RecorridoPage from './pages/RecorridoPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repartidores" element={<RepartidoresPage />} />
        <Route path="/paquetes" element={<PaquetesPage />} />
        <Route path="/recorrido/:id" element={<RecorridoPage />} />
      </Routes>
    </Router>
  );
}

export default App;