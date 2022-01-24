import './App.css';
import Links from './components/Nav/Links';
import Nav from './components/Nav/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FaqPortal from "./Components/FaqPortal";

function App() {
  return (
    <div className="App">
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
