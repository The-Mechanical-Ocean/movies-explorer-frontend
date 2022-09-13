import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import './Header.css';

const Header = () => {
    let location = useLocation();

    return (
      <header className={ location.pathname === '/signin' ? 'header__small' 
        : location.pathname === '/signup' ? 'header__small' : 'header'}>
        <Link  className= 'header__logo-link' to='/'>
        <div className={ location.pathname === '/signin' ? 'header__logo || header__logo-popup' 
      : location.pathname === '/signup' ? 'header__logo || header__logo-popup' : 'header__logo'}></div>
        </Link>
        <Navigation />
      </header>
    );
};

export default Header;

