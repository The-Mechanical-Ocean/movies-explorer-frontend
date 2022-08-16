import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Main from './Main'

function Header(props) {
  return (
    <header className="header">
      <div className="page__logo"></div>
      <Routes>
        <Route path='/' element={<Main/>}>
          <>
          <nav className="header__auth">
            <Link className="header__link" to='films'>Фильмы</Link>
            <Link className="header__link" to='saved'>Сохраненные фильмы</Link>
            <Link className="header__link" type="button" onClick={props}>Аккаунт</Link>
          </nav>
          </>
        </Route>
        <Route path='/landing' element={<Landing/>}>
          <>
          <nav className="header__auth">  
          <Link className="header__link" to='sign-up' >Регистрация</Link>
          <Link className="header__link" to='sign-in' type="button" onClick={props}>Войти</Link>
          </nav>
          </> 
        </Route>
      </Routes>
    </header>
  )
}

export default Header; 