import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Landing (props) {
  return (
    <>
      <header className="header">
        <div className="page__logo"></div>
        <nav className="header__auth">  
          <Link className="header__text header__link" to='sign-up' >Регистрация</Link>
          <Link className="header__text header__link_button" to='sign-in' type="button" onClick={props}>Войти</Link>
        </nav>      
      </header>
      <main className='main'>
        <section className='hero'>
          <div className='hero__container'>
            <h1 className='hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <nav className='hero__nav'>
              <Link className='hero__link' to='#'>О проекте</Link>
              <Link className='hero__link' to='#'>Технологии</Link>
              <Link className='hero__link' to='#'>Студент</Link>
            </nav>
          </div>
        </section>
        <section className="about">
        <h3 class="about__itle">О проекте</h3>
        <ul class="about__list">
          <li class="about__cell">
            <h4 class="about__cell-heading">Дипломный проект включал 5 этапов</h4>
            <p class="about__cell-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li class="about__cell">
            <h4 class="about__cell-heading">На выполнение диплома ушло 5 недель</h4>
            <p class="about__cell-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>  
        
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Landing;