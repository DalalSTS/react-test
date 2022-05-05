import { createRoot } from 'react-dom/client';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import MyProfile from './MyProfile';
import MatchPage from './MatchPage';
import Questions from './Questions';
//import NoPage from "./pages/NoPage";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Questions" element={<Questions />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path='MyProfile' element={<MyProfile />} />
          <Route path='MatchPage' element={<MatchPage />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot( document.getElementById('root')).render(<App />);
