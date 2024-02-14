import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './comps/Header';
import Intro from './pages/intro';
import Main from './pages/main';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/" element={<Main/>}></Route>
          {/* <Route path="/project" element={<Detail/>}></Route> */}
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
