import React from 'react';
import './EntryForm.css';
import {Link, useLocation} from 'react-router-dom';

function EntryForm({name, title, children, onSubmit}) {
  let location = useLocation();

  return (
    <div className="popup popup_for_entry popup_opened">
      <div className="popup__container popup__container_for_entry">
        {/* <Link to='/' className={ location.pathname === '/signin' ? 'popup__logo-link' 
      : location.pathname === '/signup' ? 'popup__logo-link' : ''}><div className="popup__logo"></div></Link> */}
        <h2 className={`popup__name-form popup__name-form_for_entry popup__title_for${name}`}>{title}</h2>
        <form className={`popup__form popup__form_for_${name}`} name={name} 
              onSubmit={onSubmit}>
          {children}  
        </form>
      </div>   
    </div>  
    )
}

export default EntryForm;