import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__ul-links'>
      <li className='portfolio__li-container'>
        <a className='portfolio__link' href='https://the-mechanical-ocean.github.io/how-to-learn/index.html' target='_ blank'>Статичный сайт</a>
        <a href='https://the-mechanical-ocean.github.io/how-to-learn/' target='_ blank'><div className='portfolio__link-image'></div></a>
      </li>  
      <li className='portfolio__li-container'>
        <a className='portfolio__link' href='https://the-mechanical-ocean.github.io/russian-travel/index.html' target='_ blank'>Адаптивный сайт</a>
        <a href='https://the-mechanical-ocean.github.io/russian-travel/index.html' target='_ blank'><div className='portfolio__link-image'></div></a>
      </li>  
      <li className='portfolio__li-container'>
        <a className='portfolio__link' href='https://the-mechanical-ocean.nomoredomains.sbs' target='_ blank'>Одностраничное приложение</a>
        <a href='https://the-mechanical-ocean.nomoredomains.sbs' target='_ blank'><div className='portfolio__link-image'></div></a>
      </li>
      </ul>  
    </section>
  );
};

export default Portfolio;