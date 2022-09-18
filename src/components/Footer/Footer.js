import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__nav-container'>
        <p className="footer__copyright">&copy; 2022. Александр Кудрин</p>
        <nav className="footer__nav">  
          <a className="footer__text footer__link" href='https://practicum.yandex.ru' target=' _blank'>Яндекс.Практикум</a>
          <a className="footer__text footer__link" href='https://github.com/The-Mechanical-Ocean' target=' _blank'>Github</a>
          <a className="footer__text footer__link" href='http://facebook.com/' target=' _blank'>Facebook</a>
        </nav>  
      </div>   
    </footer>
  )
}

export default Footer;