import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <>
      <div className="filter">
        <label className="filter__container">
          <input
            type="checkbox"
            className="filter__checkbox"
            onChange={(e) => props.onChange(e.target.checked)}
            checked={props.checked}
          />
          <span className="filter__tumbler"></span>
        </label>
        <p className="filter__text">Короткометражки</p>
      </div>
    </>
  );
}

export default FilterCheckbox;
