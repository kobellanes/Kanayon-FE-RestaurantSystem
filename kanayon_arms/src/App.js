import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import OrderNow from './components/OrderNow/OrderNow';
import Login from './components/Login/Login';
import AdminHomePage from './components/AdminHomePage/AdminHomePage';
import UserPage from './components/UserPage/UserPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="ordernow" element={<OrderNow />} />
          <Route path="login" element={<Login />} />
          <Route path="userlist" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
