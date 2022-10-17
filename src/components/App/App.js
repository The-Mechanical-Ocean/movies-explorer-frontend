import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
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

import { api } from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
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
  const [movies, setMovies] = React.useState([]);
  
  useEffect( () => {
    setIsHeader(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' 
    || location.pathname === '/profile' || location.pathname === '/signin' || location.pathname === '/signup');

    setIsFooter(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies');
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.getProfile()
        .then((resProfile) => {
          setCurrentUser(resProfile)
        })
        .catch((err) =>{console.log(`Ошибка: ${err}`)})        
    }
  }, [localStorage.getItem('jwt')])

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.getSavedMovies()
        .then((resSavedMovie) => {
          setSavedMovie(resSavedMovie.filter((i) => i.owner._id === currentUser._id))
        })
        .catch((err) =>{console.log(`Ошибка: ${err}`)})        
    }
  }, [currentUser])

  function closeAllPopups() {
    setInfoTooltipOpen(false);
    setSavedMovie({});
  }

  function handleOnRegister(password, email, name) {
    api.register(password, email, name)
      .then((res) => {
        if (res) {
          setStatusMessage(true)
          setInfoTooltipOpen(true)
          setCurrentUser(res)
          navigate('/signin')
        }
      })
      .catch((err) => {
        setStatusMessage(false);
        setInfoTooltipOpen(true);  
        console.log(`Ошибка: ${err}`)
        })
      .finally(() => setInfoTooltipOpen(true))        
  }

  function handleOnLogin(password, email) {
    api.authorize(password, email)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          navigate('/movies')
        }
      })
      .catch(() => {
        setInfoTooltipOpen(true);  
        setStatusMessage(false);    
      })
  }

  function handleMovieDelete(movie) {
    api.deleteMovie(movie._id) 
      .then(() => {setSavedMovie((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})
  }

  function handleEditProfile(name, email) {
    api.editProfile(name, email)
      .then((resProfile) => {
        setCurrentUser(resProfile)
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})   
  }

  // function handleCheckToken() {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     checkToken(jwt)
  //     .then((res) => {
  //       if (res) {
  //         console.log('token: success')
  //       }
  //     })
  //     .catch((err) => {console.log(`Ошибка: ${err}`)})
  //   }
  // }

  function handleMovieSearch(searchText, isShortMovie) {
    getMovies()
      .then((res) =>{
        const filtered = filterMovies(res, searchText, isShortMovie)  
        setMovies(filtered)
      })
  }


  function handleLogout() {
    localStorage.removeItem('jwt');
    // setLoggedIn(false);
    setCurrentUser({});
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        {isHeader && <Header />}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/signup' element={!localStorage.getItem('jwt') ? <Register onSubmit={handleOnRegister} /> : <Navigate replace to='/movies'/>} />
          <Route path='/signin' element={!localStorage.getItem('jwt') ? <Login onLogin={handleOnLogin} /> : <Navigate replace to='/movies'/>} />
          <Route element={<ProtectedRoute></ProtectedRoute>}>    
          <Route path='/movies' element={<Movies handleMovieSearch={handleMovieSearch} cards={movies} />} />
          <Route  path='/saved-movies' element={<SavedMovies />} /> 
          <Route  path='/profile' element={<Profile name={currentUser.name} email={currentUser.email}
                                  onEditProfile={handleEditProfile}
                                  handleLogout={handleLogout} />} />
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>  
        <InfoTooltip
          name={'info-tool'}
          onClose={closeAllPopups} 
          isOpen={infoTooltipOpen} 
          img={statusMessage ? okImg : errorImg} 
          text={statusMessage ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так...'}    
        />
        {isFooter && <Footer />}      
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;