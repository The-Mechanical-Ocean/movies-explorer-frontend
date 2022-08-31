import React from 'react';
import Footer from './Footer/Footer';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import { Link } from 'react-router-dom';
function Landing (props) {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        <nav className="header__auth">  
          <Link className="header__text header__link" to='/sign-up' >Регистрация</Link>
          <Link className="header__text header__link_button" to='/sign-in' type="button" onClick={props}>Войти</Link>
        </nav>      
      </header>
      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Landing;