import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routing/Routers'
import NavbarApp from './components/Navbar'
import {LanguageProvider } from './context/Language'

function App() {
  return (
   <BrowserRouter>
   <LanguageProvider>
    <NavbarApp />
    <div className='container my-5'>
      < Routing/>
    </div>
    </LanguageProvider>
   </BrowserRouter>
   
  
  );
}

export default App;
