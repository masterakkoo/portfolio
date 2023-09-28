import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home"
import About from './About';
import { Router, Route, Routes } from "react-router-dom";
import Slider from './components/Slider';
import Work from './components/Work';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/work" element={<Work />} />
        <Route path="/achievments" element={<Work />} />
      </Routes>
    </>

  );
}

export default App;
