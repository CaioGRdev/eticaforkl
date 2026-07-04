import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos'; 
import DetalheServico from './pages/DetalheServico';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/:id" element={<DetalheServico />} />
        <Route path="/contato" element={<div>Página de Contato</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}