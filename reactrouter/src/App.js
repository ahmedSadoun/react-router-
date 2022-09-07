import "./App.css";
import { Fragment } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Articles from "./pages/Articles";
import { BrowserRouter, NavLink, Route, Routes,Navigate  } from "react-router-dom";

// BrowserRouter is going to wrap our entire application that contain routes and this is something that we are going to use to make a route
// Link is built with special functionality , when we click on one of these links react doesn't actually go to the server to request the page it interrupts request and stops it , then inject the component we need to the blank html page
//the difference between the NavLink and Link is that The NavLink is used when you want to highlight a link as active we give it our own styles
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Me Articles </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Fragment>
          {/* <Navbar/> */}
          <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/articles/:id" element={<Articles />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            {/* is the user is trying to go to any url that doesn't exist , then redirect him to the home page  */}
            <Route  path="*" element={<Navigate replace to="/" />} />

           
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}


export default App;
