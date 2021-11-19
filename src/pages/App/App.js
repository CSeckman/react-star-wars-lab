import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Starships from '../Starships/Starships';
import StarshipPage from '../StarshipPage/StarshipPage'


function App() {
  const navTitle= "Starwars Starships"
  return (
    <>
    <NavBar navTitle={navTitle}/>
    <Routes>
      <Route path="/" element={<Starships />}/>
      <Route path="/starship/:id" element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;
