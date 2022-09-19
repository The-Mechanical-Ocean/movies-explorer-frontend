import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <div className='filter'>
        <label className="filter__container">
          <input type='checkbox' className="filter__checkbox"/>
          <span className="filter__tumbler"></span>
        </label>
          <p className='filter__text'>Короткометражки</p>
      </div>
    </>
  );
};

export default FilterCheckbox;