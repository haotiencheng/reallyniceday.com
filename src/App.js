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

  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "1882974501781428");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
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
      )}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
    </>
  );
}

export default App;
