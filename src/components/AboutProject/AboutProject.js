import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about" id='about'>
      <div className='about__title-container'><h3 class="about__title">О проекте</h3></div>
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
        <div className='about__duration-study-column'>
          <div className='about__duration-study-cell-first'><p className='about__duration-study-text-first'>1 неделя</p></div>
          <div className='about__duration-study-cell-first'><p className='about__duration-study-text-second'>Back-end</p></div>
        </div>
        <div className='about__duration-study-column'>
          <div className='about__duration-study-cell-second'><p className='about__duration-study-text-first'>4 недели</p></div>
          <div className='about__duration-study-cell-second'><p className='about__duration-study-text-second'>Front-end</p></div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;


