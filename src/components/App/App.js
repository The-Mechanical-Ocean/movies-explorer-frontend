import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  let location = useLocation(); 
  const [isHeader, setIsHeader] = React.useState(false);
  const [isFooter, setIsFooter] = React.useState(false);
  
  useEffect( () => {
    if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies') {
      setIsHeader(true);
    }
    else {
      setIsHeader(false);
    }
  }, [location, isHeader]);

  useEffect( () => {
    if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies') {
      setIsFooter(true);
    }
    else {
      setIsFooter(false);
    }
  }, [location, isHeader]);

  return (
    <div className='app'>
      {isHeader && <Header />}
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>  
        
      {isFooter && <Footer />}      
    </div>
    
  )
}
export default App;