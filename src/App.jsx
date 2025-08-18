import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/content/Home';
import Loja from './components/content/Loja';
import Acessorios from './components/content/Acessorios';
import Suporte from './components/content/Suporte';

import './css/header.css'
import './css/footer.css'
import './css/home.css'
import './css/loja.css'
import './css/acessorios.css'
import './css/suporte.css'

import './css/card.css'
import './css/botao.css'


export default function App() {
  return (
    <BrowserRouter>
      <Header loja="Loja" acessorios="Acessórios" suporte="Suporte" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
