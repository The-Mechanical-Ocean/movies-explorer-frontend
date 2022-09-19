import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import {Link} from 'react-router-dom'
import '../EntryForm/EntryForm.css';

function Register() {
  return (
    <EntryForm name='register' title='Добро пожаловать!'> 
      <label className='popup__input-container'>
        <p className='popup__input-span'>Имя</p>
        <input className='popup__input popup__input_for_entry popup__input_type_name' type='name' name='name' id='name' 
              placeholder='' minLength='2' maxLength='40' required/>
        <span className='popup__input-error' id='name-error'></span>
      </label>                      
      <label className='popup__input-container'>      
      <p className='popup__input-span'>E-mail</p>
        <input className='popup__input popup__input_for_entry popup__input_type_email' type='Email' name='email' id='email' 
          placeholder='' minLength='2' maxLength='40' required/>
        <span className='popup__input-error' id='email-error'></span>
      </label>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Пароль</p>
        <input className='popup__input popup__input_for_entry popup__input_type_password' type='password' name='password' id='password' 
          placeholder='' minLength='6' maxLength='20' required/>
        <span className='popup__input-error' id='password-error'>Что то пошло не так...</span>     
      </label>
      <button className='popup__button-save popup__button-save_for_entry' type='submit'>Зарегистрироваться</button>
      <p className={'popup__span-text'}>Уже зарегистрированы? 
        <Link replace to='/signin' className='popup__span-link'> Войти</Link>
      </p>
    </EntryForm>
  )  
}

export default Register;