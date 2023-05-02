import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup.js";
import Footer from "./components/Footer.jsx";
import Report from "./components/Report.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/navBar2";
import Home2 from "./components/home2";
import PublicAlert from "./components/PublicAlert";

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
                  <Navbar2 /> <Home2 /> <Footer />
                </>
              }
            />
            <Route path="signUp" element={<SignUp />} />
            <Route
              path="report"
              element={
                <>
                  <Navbar2 /> <Report />
                </>
              }
            />
            <Route path="signIn" element={<SignIn />} />
            <Route
              path="publicalert"
              element={
                <>
                  <Navbar2 /> <PublicAlert /> <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
