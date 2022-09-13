import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (<>
      <div className='filter'>
        <label className="filter__container">
          <input type='checkbox' className="filter__checkbox"/>
          <span className="filter__slider"></span>
        </label>
          <p className='filter__text'>Короткометражки</p>
      </div>
    </>
  );
};

export default FilterCheckbox;