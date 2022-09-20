import React from 'react';
import { useEffect } from 'react';
import {Link, Route, Routes, NavLink, useLocation} from 'react-router-dom';
import './Navigation.css';
import profileIcon from '../../images/profile__button-edit.svg';

function Navigation() {
  let location = useLocation();
  const [menu, setMenu] = React.useState(false);
  const [widthSize, setWidthSize] = React.useState(window.innerWidth);

  function handleWindowSize() {
    setWidthSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize)
    if (widthSize >= 800) {
        setMenu(false);
    }
    return () => window.removeEventListener('resize', handleWindowSize)
  }, [widthSize])

  function handleMenu() {
    setMenu(!menu);
  }

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
      }
  }, [menu]);
  
  return (
    <Routes>
      <Route exact path='/' element={
        <nav className={ location.pathname === '/' ? 'navigation-main' : 'navigation'}>  
          <Link className='navigation-main__text navigation-main__link' to='/signup' >Регистрация</Link>
          <Link className='navigation-main__link_button' to='/signin' type='button'><p className='navigation-main__text_button'>Войти</p></Link>
        </nav>
      }>
      </Route>
      {['/movies', '/saved-movies', '/profile'].map((path, index) => {
        return (
          <Route path={path} element={
          <>
            <div className='navigation navigation_margin navigation_none'>
              <NavLink
                className={({isActive}) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}
                to='/movies'>Фильмы</NavLink>
              <NavLink
                className={({isActive}) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}
                to='/saved-movies'>Сохранённые фильмы</NavLink>
              <NavLink
                className={({isActive}) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}
                to='/profile'><p className='navigation__text'>Аккаунт</p><img
                className='navigation__icon' alt='profile img' src={profileIcon}/></NavLink>
            </div>
            <button onClick={handleMenu} className={'navigation__burger-menu'} type='button'>
              <span className={`navigation__burger-line ${menu && 'navigation__burger-line_active'}`}></span>
              <span className={`navigation__burger-line ${menu && 'navigation__burger-line_active'}`}></span>
              <span className={`navigation__burger-line ${menu && 'navigation__burger-line_active'}`}></span>
            </button>
            {menu && 
            <>
              <div className='navigation__burger-shadow'></div>
              <div className='navigation__burger-container'>
                <div className='navigation__link-container'>
                  <NavLink className={({isActive}) => isActive ? 'navigation__panel-link navigation__panel-link_margin_top navigation__panel-link_active' 
                    : 'navigation__panel-link navigation__panel-link_margin_top'} to='/'>Главная</NavLink>
                  <NavLink className={({isActive}) => isActive ? 'navigation__panel-link navigation__panel-link_active' 
                    : 'navigation__panel-link'} to='/movies'>Фильмы</NavLink>
                  <NavLink className={({isActive}) => isActive ? 'navigation__panel-link navigation__panel-link_active' 
                    : 'navigation__panel-link'} to='/saved-movies'>Сохранённые фильмы</NavLink>
                </div>
                  <NavLink className={({isActive}) => isActive ? 'navigation__panel-link navigation__panel-link_margin_bottom navigation__panel-link_active' : 'navigation__panel-link navigation__panel-link_margin_bottom'}
                    to='/profile'><p className='navigation__text'>Аккаунт</p><img className='navigation__icon' alt='profile icon' src={profileIcon}/>
                  </NavLink>
              </div>
            </>}
          </>} key={index}>
          </Route>
        )
    })}
    </Routes>
  );
};

export default Navigation;   