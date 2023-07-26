import { Routes, Route } from "react-router-dom"
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './component/HomePage/HomePage'
import Register from "./component/Register/Register";

import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
      </Routes>
    <Footer />

    </>
  );
}

export default App;
