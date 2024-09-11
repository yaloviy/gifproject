import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import HomePage from './Pages/Home/Home';
import InfoPage from './Pages/Info/Info';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/info' element={<InfoPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
