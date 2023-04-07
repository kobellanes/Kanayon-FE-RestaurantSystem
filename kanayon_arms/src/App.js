import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Admin from './components/Admin/Admin';
import AboutUs from './components/AboutUs/AboutUs';
import UserList from './components/UserPage/UserPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="admin" element={<Admin />} />
          <Route path="userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
