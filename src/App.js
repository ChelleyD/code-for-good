import './App.css';
import Links from './components/Nav/Links';
import Nav from './components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './pages/Faq';


function App() {
  return (
    <div className="App">

      <Faq name= "Frequently Asked Questions: " />
      <Faq name= "Quincy" />
        <button>Action</button>
      <Faq name= "Tayharlee" />
        <button>Action</button>
      <Faq name= "Adama" />
        <button>Action</button>
      <Faq name= "Tamika" />
        <button>Action</button>
      <Faq-prompt />


      <Nav />
      <Routes>
        {Links.map((element) => {
          return (
            <Route path={element.link} element={element.component}/>
          );
        })}
      </Routes>
      
    </div>
  );
}

export default App;
