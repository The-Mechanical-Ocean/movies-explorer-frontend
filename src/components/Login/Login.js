import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import {Link} from 'react-router-dom'
import '../EntryForm/EntryForm.css';

function Login() {
  return (
    <EntryForm name='login' title='Рады видеть!'>    
      <label className='popup__input-container'>
        <p className='popup__input-span'>E-mail</p>      
        <input className='popup__input popup__input_for_entry popup__input_type_email' type='Email' name='email' 
          id='email' placeholder='' minLength='2' maxLength='40' required/>
        <span className='popup__input-error' id='email-error'></span>
      </label>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Пароль</p>      
        <input className='popup__input popup__input_for_entry popup__input_type_password' type='password' name='password' id='password' 
              placeholder='' minLength='6' maxLength='20' required/>
        <span className='popup__input-error' id='password-error'></span>
      </label>
      <button className='popup__button-save popup__button-save_for_entry popup__button-save_for_login' type='submit'>Войти</button>
      <p className='popup__span-text'>Еще не зарегистрированны? 
        <Link to='/signup' className='popup__span-link'> Регистрация</Link>
      </p>
    </EntryForm>
  )  
}

export default Login;