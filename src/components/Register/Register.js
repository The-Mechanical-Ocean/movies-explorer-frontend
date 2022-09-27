import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import {Link} from 'react-router-dom'
import '../EntryForm/EntryForm.css';

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleNameChange (e) {
    setName(e.target.value);
  }

  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    debugger;
    e.preventDefault();
    props.onSubmit(
      password,
      email,
      name
    )
  }
  return (
    <EntryForm name='register' title='Добро пожаловать!'
               onSubmit={handleSubmit} >
      <label className='popup__input-container'>
        <p className='popup__input-span'>Имя</p>
        <input className='popup__input popup__input_for_entry popup__input_type_name' type='name' name='name' id='name' 
               value={name || ''} placeholder='' minLength='2' maxLength='40' required
               onChange={handleNameChange} />
        <span className='popup__input-error' id='name-error'></span>
      </label>                      
      <label className='popup__input-container'>      
      <p className='popup__input-span'>E-mail</p>
        <input className='popup__input popup__input_for_entry popup__input_type_email' type='Email' name='email' id='email' 
               value={email || ''} placeholder='' minLength='2' maxLength='40' required
               onChange={handleEmailChange} />
        <span className='popup__input-error' id='email-error'></span>
      </label>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Пароль</p>
        <input className='popup__input popup__input_for_entry popup__input_type_password' type='password' name='password' id='password' 
               value={password || ''} placeholder='' minLength='6' maxLength='20' required
               onChange={handlePasswordChange} />
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