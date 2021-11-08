import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Navigation from "./Components/Navigation/Navigation.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Dance from "./Components/Dance/Dance.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css";
import Loader from "./Components/Loader/Loader.js";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        );
    } else {
        return (
            <CSSTransition
                in={!loading}
                timeout={1500}
                classNames="loading"
                unmountOnExit
                appear
            >
                <div className="App">
                    <Navigation />
                    <Home />
                    <About />
                    <Portfolio />
                    <Dance />
                    <Contact />
                    <Footer />
                </div>
            </CSSTransition>
        );
    }
}

export default App;
