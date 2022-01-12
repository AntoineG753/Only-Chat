import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './layouts/Home';
import ErreurPage from './layouts/ErreurPage';
import Connection from './layouts/Connection';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/err" element={<ErreurPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Connection/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
