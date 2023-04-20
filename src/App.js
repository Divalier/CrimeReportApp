import React from "react";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup.js";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards.jsx";
import Report from "./components/Report.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar /> <Hero /> <Cards /> <Footer />
                </>
              }
            />
            <Route path="signUp" element={<SignUp />} />
            <Route path="report" element={<Report />} />
            <Route path="signIn" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
