import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__nav-container'>
        <p className="footer__copyright">&copy; 2022. Александр Кудрин</p>
        <nav className="footer__nav">  
          <Link className="footer__text footer__link" to='https://practicum.yandex.ru' >Яндекс.Практикум</Link>
          <Link className="footer__text footer__link" to='https://practicum.yandex.ru'>Github</Link>
          <Link className="footer__text footer__link" to='http://facebook.com/' >Facebook</Link>
        </nav>  
      </div>   
    </footer>
  )
}

export default Footer;