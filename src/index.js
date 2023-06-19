import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Details from './pages/details/details';
import Topbar from './pages/home/header';
import Search from './pages/search/search';
import Login from './pages/login/login';
import Register from './pages/register/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path="/:categoria" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:categoria" element={<Details />}/>
      <Route path="/search/:texto" element={<Search />} />
      <Route path="/search" element={<Search />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  </BrowserRouter>
);