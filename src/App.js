import React, { useState } from 'react';
import Header from './components/Header';
import './styles/app.scss'
import Landing from './pages/Landing';
import Mobile from './pages/Mobile';
import Headphone from './pages/Headphone';
import Charger from './pages/Charger';
import Smartwatch from './pages/Smartwatch';
import { Route, Routes } from "react-router-dom";
import SamsungProduct from './components/SamsungProduct';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
      <div className="App">
          <Header  
            setIsLogOpen={setIsLogOpen} 
            setIsOpenNav={setIsOpenNav}
            isOpenNav={isOpenNav}
            />
          <Routes>
            <Route path="/" element={<Landing isOpenNav={isOpenNav}/>} index/>
            <Route path="/mobile/apple" element={<Mobile />} />
            <Route path='/mobile/samsung' element={<SamsungProduct />}/>
            <Route path='/mobile/apple/:id' element={<Products />} />
            <Route path="/headphone" element={<Headphone />} />
            <Route path="/smartwatch" element={<Smartwatch />} />
            <Route path="/charger" element={<Charger />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <LogIn isLogOpen={isLogOpen} setIsLogOpen={setIsLogOpen}/>
          <Footer />
      </div>
  );
}

export default App;
