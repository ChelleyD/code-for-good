import "./App.css";
import "./styles/Nav.css";
import "./styles/Footer.css";
import "./App.css";
import "./styles/Nav.css";
import "./styles/Footer.css";
import Links from "./components/Nav/Links";
import Nav from "./components/Nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Faq from "./pages/Faq";

function App() {
  return (
    <div className="App">

      {/* <Faq /> */}

      <Nav />
      <Routes>
        {Links.map((element) => {
          return (
            <Route
              key={element}
              path={element.link}
              element={element.component}
            />
          );
        })}
      </Routes>

      {/* <Contact /> */}
      
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
