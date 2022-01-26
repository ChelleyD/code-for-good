import './App.css';
import Links from './components/Nav/Links';
import Nav from './components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react'
// import { SettingsInputComponent } from '@mui/icons-material';
//  import Faq from './pages/Faq';


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
      </Routes>,
      {/* <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
        </Modal>

      </div> */}
      
    </div>
  );
}

export default App;
