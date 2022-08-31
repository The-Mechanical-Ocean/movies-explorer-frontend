import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  return (
    <section className='not-page'>
      <h2 className='not-page__title'>404</h2>
      <p className='not-page__text'>Страница не найдена</p>
      <Link className='not-page__link' replace to={-1}>Назад</Link>
    </section>
  ); 
}

export default PageNotFound; 