import React from 'react';
import './EntryForm.css';

function EntryForm({name, title, children}) {
  return (
    <div className="popup popup_for_entry popup_opened">
      <div className="popup__container popup__container_for_entry">
        <h2 className={`popup__name-form popup__name-form_for_entry popup__title_for${name}`}>{title}</h2>
        <form className={`popup__form popup__form_for_${name}`} name={name}>
          {children}  
        </form>
      </div>   
    </div>  
  )
}

export default EntryForm;