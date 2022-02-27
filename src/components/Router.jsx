import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/Home';
import Tools from '../pages/tools/Tools';
import NotFound from '../pages/NotFound';
import Portfolio from '../pages/Portfolio';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path='/tools' element={ <Tools /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}
