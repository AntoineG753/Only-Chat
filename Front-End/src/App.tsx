import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './layouts/Home';
import ErreurPage from './layouts/ErreurPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<ErreurPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
