import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Users/HomePage/HomePage';
import AboutUs from './components/Users/AboutUs/AboutUs';
import OrderNow from './components/Users/OrderNow/OrderNow';
import Login from './components/Users/Login/Login';
import AdminHomePage from './components/Admin/HomePage/HomePage';
import UserPage from './components/Admin/UserList/UserList';
import StockList from './components/Admin/StockList/StockList';
import OrderList from './components/Admin/OrderList/OrderList';
import OrderHere from './components/Users/OrderHere/OrderHere';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="ordernow" element={<OrderNow />} />
          <Route path="orderhere" element={<OrderHere />} />
          <Route path="login" element={<Login />} />
          <Route path="userlist" element={<UserPage />} />
          <Route path="stocklist" element={<StockList />} />
          <Route path="orderlist" element={<OrderList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
