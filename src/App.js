<<<<<<< HEAD
import './App.css';
import Links from './components/Nav/Links';
import Nav from './components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
// import { SettingsInputComponent } from '@mui/icons-material';
//  import Faq from './pages/Faq';

=======
import "./App.css";
import "./styles/Nav.css";
import "./styles/Footer.css";
import Links from "./components/Nav/Links";
import Nav from "./components/Nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
>>>>>>> 5cf89ff0782397c1ccd28b59eaf13b0f2289842c

function App() {
  const [isOpen, setIsOpen] = useState(false)

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
            />,
          )
        })}
<<<<<<< HEAD
      </Routes>,
      {/* <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
        </Modal>

      </div> */}
=======
      </Routes>

      <div>
        <Footer />
      </div>
>>>>>>> 5cf89ff0782397c1ccd28b59eaf13b0f2289842c
      
    </div>
  );
}

export default App;
