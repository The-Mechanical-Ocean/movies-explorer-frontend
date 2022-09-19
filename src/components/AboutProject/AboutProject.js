import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about" id='about'>
      <div className='about__title-container'><h2 class="about__title">О проекте</h2></div>
      <ul class="about__list">
        <li class="about__cell">
          <h3 class="about__cell-heading">Дипломный проект включал 5 этапов</h3>
          <p class="about__cell-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li class="about__cell">
          <h3 class="about__cell-heading">На выполнение диплома ушло 5 недель</h3>
          <p class="about__cell-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>  
      <ul className="about__duration-study">
        <li className='about__duration-study-column'>
          <div className='about__duration-study-cell-first'><h3 className='about__duration-study-text-first'>1 неделя</h3></div>
          <div className='about__duration-study-cell-first'><p className='about__duration-study-text-second'>Back-end</p></div>
        </li>
        <li className='about__duration-study-column'>
          <div className='about__duration-study-cell-second'><h3 className='about__duration-study-text-first'>4 недели</h3></div>
          <div className='about__duration-study-cell-second'><p className='about__duration-study-text-second'>Front-end</p></div>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;


