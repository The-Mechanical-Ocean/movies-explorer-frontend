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
        <h3 class="about__title">О проекте</h3>
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
        <div className="about__duration-study">
          <div className='about__duration-study-cell-first'><p className='about__duration-study-text-first'>1 неделя</p></div>
          <div className='about__duration-study-cell-second'><p className='about__duration-study-text-first'>4 недели</p></div>
          <div className='about__duration-study-cell-first'><p className='about__duration-study-text-second'>Back-end</p></div>
          <div className='about__duration-study-cell-second'><p className='about__duration-study-text-second'>Front-end</p></div>
        </div>
        </section>
        <section className='tech'>
            <h3 class="tech__title">Технологии</h3>
            <h2 className='tech__big-title'>7 технологий</h2>
            <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <nav className='tech__nav'>
              <Link className='tech__link' to='#'>HTML</Link>
              <Link className='tech__link' to='#'>CSS</Link>
              <Link className='tech__link' to='#'>JS</Link>
              <Link className='tech__link' to='#'>React</Link>
              <Link className='tech__link' to='#'>Git</Link>
              <Link className='tech__link' to='#'>Express.js</Link>
              <Link className='tech__link' to='#'>MongoDB</Link>
            </nav>
        </section>
        <section className='student'>
          <div className='student__container'>
            <h3 class="student__title">Студент</h3>
            <p className='student__name'>Александр</p>
            <p className='student__about'>Фронтенд-разработчик, 33 года</p>
            <p className='student__description'>Я родился в Ростове-на-Дону, закончил факультет технических средств вычислительной техники и компьютерных сетей РГКРИПТ, и позже 
              факультет инфромационныч систем и технологий университета ДГТУ. У меня есть прекрасная жена и дочь, а так же сын. 
              Я люблю слушать музыку, я бы сказал - обожаю:) и играю на барабанах с 14 лет, а ещё увлекаюсь кино, книгами и хорошими играми. 
              Недавно начал кодить. С 2012 года работаю в компании «НТЦ ЮРИОН» сначала в должности инженера-разробочика, а на данный момент в должности начальника отдела. 
              После того, как прошёл курс по веб-разработке, начал заниматься понемногу фриланс-заказами и планирую полностью сменить профессиональную деятельность.</p>
            <div className='student__links'>
              <Link className='student__link' to='#'>Facebook</Link>
              <Link className='student__link' to='https://github.com/The-Mechanical-Ocean'>Github</Link>
            </div>
            <div className='student__foto'></div>  
          </div>
          <p className='student__portfolio'>Портфолио</p>
          <div className='student__portfolio-link-container'>
            <Link className='student__portfolio-link' to='#'>Статичный сайт</Link>
            <div className='student__portfolio-link-image'></div>
          </div>  
          <div className='student__portfolio-link-container'>
            <Link className='student__portfolio-link' to='#'>Адаптивный сайт</Link>
            <div className='student__portfolio-link-image'></div>
          </div>  
          <div className='student__portfolio-link-container'>
            <Link className='student__portfolio-link' to='#'>Одностраничное приложение</Link>
            <div className='student__portfolio-link-image'></div>
          </div>  
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Landing;