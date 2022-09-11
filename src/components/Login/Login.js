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
               onSubmit={handleSubmit}>    
      <span className="popup__input-span">E-mail</span>
      <div className='popup__input-container'>      
        <input className="popup__input popup__input_for_entry popup__input_type_email" type="Email" name="email" id="email" 
              value={email || ''} placeholder="" minLength="2" maxLength="40" required 
              onChange={handleEmailChange} />
      </div>
      <span className="popup__input-error popup__input-error_active" id="email-error"></span>
      <span className="popup__input-span">Пароль</span>      
      <div className='popup__input-container'>
        <input className="popup__input popup__input_for_entry popup__input_type_password" type="password" name="password" id="password" 
              value={password || ''} placeholder="" minLength="6" maxLength="20" required
              onChange={handlePasswordChange} />
      </div>
      <span className="popup__input-error popup__input-error_active" id="password-error"></span>
      <button className="popup__button-save popup__button-save_for_entry popup__button-save_for_login" type="submit">Войти</button>
      <p className={"popup__span-text"}>Еще не зарегистрированны? 
        <Link to={'sign-up'} className={"popup__span-link"}> Регистрация</Link>
      </p>
    </EntryForm>
  )  
}

export default Login;