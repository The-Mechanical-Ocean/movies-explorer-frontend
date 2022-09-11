import React from "react";
import {Link, Route, Routes, NavLink, useLocation} from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  let location = useLocation();

  return (
    <Routes>
      <Route exact path='/' element={
        <nav className="navigation">  
          <Link className="navigation__text navigation__link" to='/signup' >Регистрация</Link>
          <Link className="navigation__text navigation__link_button" to='/signin' type="button">Войти</Link>
        </nav>
      }>
      </Route>
    </Routes>
  );
};

export default Navigation;



      