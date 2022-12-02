import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bands from "./components/Bands";
//import ElementosDetail from './ElementosDetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bands />} />
         {/* <Route path="/elementos/:elementoId" element={<ElementosDetail/>} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
