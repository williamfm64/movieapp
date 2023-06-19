import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Details from './pages/details/details';
import Topbar from './pages/home/header';
import Search from './pages/search/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path="/:categoria/:pag" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:categoria/:pag/:texto" element={<Details />}/>
      <Route path="/details/:id/:categoria/:pag" element={<Details />}/>
      <Route path="/search/:pag/:texto" element={<Search />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);