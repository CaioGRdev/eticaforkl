import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos"/>
        <Route path="/contato"/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
