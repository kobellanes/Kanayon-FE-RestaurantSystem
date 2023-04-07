import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
