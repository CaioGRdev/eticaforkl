import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/"/>
        <Route path="/quem-somos"/>
        <Route path="/servicos"/>
        <Route path="/contato"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
