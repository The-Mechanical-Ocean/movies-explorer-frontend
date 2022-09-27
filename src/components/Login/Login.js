import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import {Link} from 'react-router-dom'
import '../EntryForm/EntryForm.css';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
 
  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(
      password,
      email
    )
  }
  return (
    <EntryForm name='login' title='Рады видеть!'
               onSubmit={handleSubmit} >    
      <label className='popup__input-container'>
        <p className='popup__input-span'>E-mail</p>      
        <input className='popup__input popup__input_for_entry popup__input_type_email' type='Email' name='email' 
               value={email || ''} id='email' placeholder='' minLength='2' maxLength='40' required
               onChange={handleEmailChange} />
        <span className='popup__input-error' id='email-error'></span>
      </label>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Пароль</p>      
        <input className='popup__input popup__input_for_entry popup__input_type_password' type='password' name='password' id='password' 
               value={password || ''}placeholder='' minLength='6' maxLength='20' required
               onChange={handlePasswordChange} />
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