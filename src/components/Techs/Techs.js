import React from 'react';
import './Techs.css';

const Techs = () => {
    return (
      <section className='techs' id='techs'>
        <div className='techs__title-container'><h2 class="techs__title">Технологии</h2></div>
        <h2 className='techs__big-title'>7 технологий</h2>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__ul'>
          <li className='techs__li'><p className='techs__li-text'>HTML</p></li>
          <li className='techs__li'><p className='techs__li-text'>CSS</p></li>
          <li className='techs__li'><p className='techs__li-text'>JS</p></li>
          <li className='techs__li'><p className='techs__li-text'>React</p></li>
          <li className='techs__li'><p className='techs__li-text'>Git</p></li>
          <li className='techs__li'><p className='techs__li-text'>Express.js</p></li>
          <li className='techs__li'><p className='techs__li-text'>mongoDB</p></li>
        </ul>
      </section>    
    );
};

export default Techs;