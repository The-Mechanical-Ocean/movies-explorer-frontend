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
    e.preventDefault();
    props.onRegister(
      password,
      email
    )
  }

  return (
    <EntryForm name='register' title='Добро пожаловать!'  
                onSubmit={handleSubmit}> 
      <span className="popup__input-span">Имя</span> 
      <label className='popup__input-container'>
        <input className="popup__input popup__input_for_entry popup__input_type_name" type="name" name="name" id="name" 
              value={name || ''} placeholder="" minLength="2" maxLength="40" required 
              onChange={handleNameChange} />
      </label>       
      <span className="popup__input-error popup__input-error_active" id="name-error"></span>               
      <span className="popup__input-span">E-mail</span>
      <label className='popup__input-container'>      
        <input className="popup__input popup__input_for_entry popup__input_type_email" type="Email" name="email" id="email" 
              value={email || ''} placeholder="" minLength="2" maxLength="40" required 
              onChange={handleEmailChange} />
      </label>
      <span className="popup__input-error popup__input-error_active" id="email-error"></span>
      <span className="popup__input-span">Пароль</span>      
      <label className='popup__input-container'>
        <input className="popup__input popup__input_for_entry popup__input_type_password" type="password" name="password" id="password" 
              value={password || ''} placeholder="" minLength="6" maxLength="20" required
              onChange={handlePasswordChange} />
      </label>
      <span className="popup__input-error popup__input-error_active" id="password-error"></span>
      <button className="popup__button-save popup__button-save_for_entry" type="submit">Зарегистрироваться</button>
      <p className={"popup__span-text"}>Уже зарегистрированы? 
        <Link replace to='/signin' className="popup__span-link"> Войти</Link>
      </p>
    </EntryForm>
  )  
}

export default Register;