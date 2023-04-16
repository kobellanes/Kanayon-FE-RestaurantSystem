import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import UserPage from './components/UserPage/UserPage';
import OrderNow from './components/OrderNow/OrderNow';
import Login from './components/Login/Login';
import AdminSideBar from './components/AdminSideBar/AdminSideBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="admin" element={<AdminSideBar />} />
          <Route path="userlist" element={<UserPage />} />
          <Route path="ordernow" element={<OrderNow />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
