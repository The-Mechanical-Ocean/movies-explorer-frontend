import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import okImg from '../../images/infotooltip__ok-auth.svg';
import errorImg from '../../images/infotooltip__error-auth.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

import { Api } from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import {register, authorize, checkToken} from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { getMovies } from '../../utils/MoviesApi'
import { filterMovies } from '../../utils/filterMovies';

function App() {
  let location = useLocation(); 
  const navigate = useNavigate();
  const [isHeader, setIsHeader] = React.useState(false);
  const [isFooter, setIsFooter] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovie, setSavedMovie] = React.useState([]);
  const [infoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  
  useEffect( () => {
    setIsHeader(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' 
    || location.pathname === '/profile' || location.pathname === '/signin' || location.pathname === '/signup');

    setIsFooter(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies');
  }, [location.pathname]);

  useEffect(() => {
    handleCheckToken();
    if (loggedIn) {
      navigate('/movies');
      Promise.all([Api.getSavedMovies(), Api.getProfile()])
        .then(([resSavedMovie, resProfile]) => {
          setSavedMovie(resSavedMovie.filter((i) => i.owner._id === currentUser._id))
          setCurrentUser(resProfile);
        })
        .catch((err) =>{console.log(`Ошибка: ${err}`)})        
    }
  }, [loggedIn, currentUser, navigate])

  function handleLoggedIn() {
    setLoggedIn(true);
  }

  function closeAllPopups() {
    setInfoTooltipOpen(false);
    setSavedMovie({});
  }

  function handleOnRegister(password, email, name) {
    // debugger;
    register(password, email, name)
      .then((res) => {
        // debugger;
        if (res) {
          // setInfoTooltipOpen(true)
          setStatusMessage(true);
          setCurrentUser(res)
          navigate('/signin');
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
        })
      .finally(() => setInfoTooltipOpen(true))        
  }

  function handleOnLogin(password, email) {
    debugger;
    authorize(password, email)
      .then((res) => {
        if (res) {
          // setEmail(email);
          localStorage.setItem('jwt', res.token);
          handleLoggedIn()
          navigate('/movies');
        }
      })
      .catch(() => {
        setInfoTooltipOpen(true);  
        setStatusMessage(false);    
      })
  }

  function handleMovieDelete(movie) {
    Api.deleteMovie(movie._id) 
      .then(() => {setSavedMovie((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})
  }

  function handleEditProfile(name, email) {
    Api.editProfile(name, email)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})   
  }

  function handleCheckToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt)
      .then((res) => {
        if (res) {
          // setEmail(res.email);
          handleLoggedIn();
        }
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})
    }
  }

  function handleMovieSearch(searchText, isShortMovie) {
    getMovies()
      .then((res) =>{
        const filtered = filterMovies(res, searchText, isShortMovie)  
        setMovies(filtered)
        console.log(filtered)
      })
  }


  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setEmail('');
    navigate('/');
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        {isHeader && <Header />}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/signup' element={<Register onSubmit={handleOnRegister}
                                                   />}
          />
          <Route path='/signin' element={<Login onLogin={handleOnLogin} />}
                
                // loggedIn={loggedIn}
                />
        {/* <Route element={<ProtectedRoute loggedIn={loggedIn}>       */}
          <Route path='/movies' element={<Movies handleMovieSearch={handleMovieSearch} cards={movies} />}/>
          <Route path='/saved-movies' element={<SavedMovies/>}/>
          <Route path='/profile' element={<Profile name={'Александр'} email={'pochta@yandex.ru'}/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          {/* </ProtectedRoute>}> */}
        {/* </Route>   */}
        </Routes>  
        <InfoTooltip
          name={'info-tool'}
          onClose={closeAllPopups} 
          isOpen={infoTooltipOpen} 
          img={statusMessage ? okImg : errorImg} 
          text={statusMessage ? 'Вы успешно зарегистрировались!'
                              : 'Что-то пошло не так! Попробуйте ещё раз.'}    
        />
        {isFooter && <Footer />}      
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;