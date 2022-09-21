import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <section className='navtab'>
      <div className='navtab__container'>
        <a className='navtab__link' href='#about'>О проекте</a>
        <a className='navtab__link' href='#techs'>Технологии</a>
        <a className='navtab__link' href='#student'>Студент</a>
      </div>
    </section>
  );
};

export default NavTab;