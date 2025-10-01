import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  );
}
