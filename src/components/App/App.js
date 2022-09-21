import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  let location = useLocation(); 
  const [isHeader, setIsHeader] = React.useState(false);
  const [isFooter, setIsFooter] = React.useState(false);
  
  useEffect( () => {
    if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' 
      || location.pathname === '/profile' || location.pathname === '/signin' || location.pathname === '/signup') {
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
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile name={'Александр'} email={'pochta@yandex.ru'}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>  
      {isFooter && <Footer />}      
    </div>
  )
}

export default App;