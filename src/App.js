import './App.css';
import Links from './components/Nav/Links';
import Nav from './components/Nav/Navbar';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Faq} from './pages/Faq';
=======
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FaqPortal from "./Components/FaqPortal";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Faq />
      <Nav />
      <Routes>
        {Links.map((element) => {
          return (
            <Route path={element.link} element={element.component}/>
          );
        })}
      </Routes>
      <FaqPortal />
    </div>
  );
}

export default App;
