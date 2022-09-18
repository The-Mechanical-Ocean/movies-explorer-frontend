import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  return (
    <section className='page-not'>
      <h2 className='page-not__title'>404</h2>
      <p className='page-not__text'>Страница не найдена</p>
      <Link className='page-not__link' replace to={-1}>Назад</Link>
    </section>
  ); 
}

export default PageNotFound; 