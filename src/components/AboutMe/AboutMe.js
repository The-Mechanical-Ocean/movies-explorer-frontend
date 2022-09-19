import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__container'>
      <div className='about-me__title-container'><h3 class='about-me__title'>Студент</h3></div>
      <div className='about-me__foto'></div>
        <p className='about-me__name'>Александр</p>
        <p className='about-me__about'>Фронтенд-разработчик, 33 года</p>
        <p className='about-me__description'>Я родился в Ростове-на-Дону, закончил факультет "средства вычислительной техники и компьютерные сети" в РГКРИПТ, затем 
          факультет "инфромационных систем и технологий" университета ДГТУ. У меня есть прекрасная жена и дочь, а так же сын. 
          Я люблю слушать музыку, я бы сказал - обожаю:), и играю на барабаcах с 14 лет, ещё увлекаюсь кино, книгами и хорошими играми. 
          Недавно начал кодить. С 2012 года работаю в научнотехническом центре сначала в должности инженера-разробочика, а на данный момент в должности начальника отдела разработки. 
          После того, как прошёл курс по веб-разработке, начал заниматься понемногу фриланс-заказами и планирую полностью сменить профессиональную деятельность.</p>
        <div className='about-me__links'>
          <a className='about-me__link' href='https://facebook.com' target='_ blank'>Facebook</a>
          <a className='about-me__link' href='https://github.com/The-Mechanical-Ocean' target='_ blank'>Github</a>
        </div>  
      </div>
    </section>
  );
};

export default AboutMe;