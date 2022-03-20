/*
Name:-- Arjun Chauhan
github:-- https://github.com/RockstArjun
instagram:-- https://instagram.com/python.programe
linkedin:- https://linkedin.com/in/arjun-chauhan-20b9aa217
*/
import React from 'react';
import './App.css';
import Home from './Componenet/Home/Home';
import Search from './Componenet/Search/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </Router>
    
  )
}
