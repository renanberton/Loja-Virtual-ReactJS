import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/home/index'
import { Produtos } from './Pages/Produtos/index'
import { Contato } from './Pages/Contato/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
