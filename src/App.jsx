import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Notfund from "./pages/Notfund";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Notfund />} />
                
            </Routes>
            <Footer />
        </>
    )
};

export default App;