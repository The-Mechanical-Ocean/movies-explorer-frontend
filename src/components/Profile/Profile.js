import React from 'react';
import {Link} from "react-router-dom";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import '../EntryForm/EntryForm.css';
import './Profile.css';

function Profile(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);

  }, [currentUser]);

  function handleNameChange (e) {
    setName(e.target.value)
  }

  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile(
      name,
      email
    )
  }

  return (
    <main className='profile'>
      <h2 className='popup__name-form_for_entry  profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' name='edit'
            onSubmit={handleSubmit}>
        <label className='profile__input-container'>
          <p className='profile__input-text'>Имя</p>
          <input className='profile__input' type='text' id='edit-name' 
                 value={name || ''}
                 onChange={handleNameChange}/>
        </label>
        <label className='profile__input-container'>
          <p className='profile__input-text'>E-mail</p>
          <input className='profile__input' type='email' id='edit-email' 
                 value={email || ''}
                 onChange={handleEmailChange}/>
        </label>
        <button className='profile__button' type='submiit'>Редактировать</button>
      </form>
      <Link className='profile__link' replace to='/signin'
            onClick={props.handleLogout}>Выйти из аккаунта</Link>
    </main>
  );
};

export default Profile;