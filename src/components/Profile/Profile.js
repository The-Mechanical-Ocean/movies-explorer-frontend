import React from 'react';
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import '../EntryForm/EntryForm.css';
import './Profile.css';
import Preloader from '../Preloader/Preloader'

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { register, handleSubmit, formState: { errors }, formState, setValue } = useForm({
    mode: "onChange",
    defaultValues: {name:currentUser.name, email:currentUser.email}, 
  }); 

  React.useEffect(() => {
    setValue('name',currentUser.name);
    setValue('email',currentUser.email);
  }, [setValue, currentUser]);

  function onSubmit(data, e) {
    e.preventDefault();
    props.onEditProfile(
      data.name,
      data.email
    )
  }

  if(!currentUser.name) {
    return <Preloader />
  }

  return (
    <main className='profile'>
      <h2 className='popup__name-form_for_entry  profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' name='edit'
            onSubmit={handleSubmit(onSubmit)}>
        <label className='profile__input-container'>
          <p className='profile__input-text'>Имя</p>
          <input className='profile__input' id='edit-name'
            {...register('name', {
            required: true,
            minLength: {
              value: 6,
              message: "Имя должно быть не короче 6 символов"
            },
            maxLength: {
              value: 20,
            message: "Имя должно быть не длиннее 20 символов"
            },
            pattern: {
              value: /^[а-яА-ЯёЁa-zA-Z\- \s]*$/,
              message: 'только латиница, кириллица, пробел или дефис' 
            },
            })}/>       
        </label>
        { errors.name && <Error errors={errors.name.message} /> }
        <label className='profile__input-container'>
          <p className='profile__input-text'>E-mail</p>
          <input className='profile__input'  id='edit-email' name='email'  
            {...register('email', {
              required: true,
              validate: (input) => isEmail(input),
            })}/>
        </label>
        {errors.email && <Error errors={!validator.isEmail('email') && 'введены некорректные данные поля E-mail'} />}
        <button className={(errors.name || errors.email ) ? 'profile__button_inactive' : 'profile__button'} type='submit' disabled={formState.isSubmitting}>Редактировать</button>
      </form>
      <Link className='profile__link' replace to='/'
            onClick={props.handleLogout}>Выйти из аккаунта</Link>
    </main>
  );
};

export default Profile;