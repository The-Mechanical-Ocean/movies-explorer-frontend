import React from 'react';
import EntryForm from '../EntryForm/EntryForm';
import {Link} from 'react-router-dom'
import Error from '../Error/Error';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import '../EntryForm/EntryForm.css';

function Register(props) {
  const { register, handleSubmit, formState: { errors }, formState, getValues } = useForm({
    mode: "onChange",
  }); 

  function onSubmit(data, e) {
    e.preventDefault();
    props.onSubmit(
      data.password,
      data.email,
      data.name
    )
  }

  return (
    <EntryForm name='register' title='Добро пожаловать!' onSubmit={handleSubmit(onSubmit)}>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Имя</p>
        <input className='popup__input popup__input_for_entry popup__input_type_name' id='name' 
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
          })}/>      
        {errors.name && <Error errors={errors.name.message}/>} 
      </label>                      
      <label className='popup__input-container'>      
      <p className='popup__input-span'>E-mail</p>
        <input className='popup__input popup__input_for_entry popup__input_type_email' id='email' 
          {...register('email', {
            required: true,
            message: "Имя траляля",
            validate: (input) => isEmail(input),
          })}/>  
        { errors.email && <Error errors={!validator.isEmail('email') && 'Введены некорректные данные поля E-mail'} /> }     
      </label>
      <label className='popup__input-container'>
        <p className='popup__input-span'>Пароль</p>
        <input className='popup__input popup__input_for_entry popup__input_type_password' id='password'  
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: "Минимальная длина пароля - 8 символов"
            },
          })}/>      
        { errors.password ? <Error errors={errors.password.message}/>
                          : props.profileError && <Error errors={props.profileErrText} /> }
        <span className='popup__input-error' id='password-error'>Что то пошло не так...</span>     
      </label>
      <button className={((!getValues('name') || errors.name) || (!getValues('email') || errors.email) || (!getValues('password') || errors.password))
        ? 'popup__button-save_inactive popup__button-save popup__button-save_for_entry' : 'popup__button-save popup__button-save_for_entry'} 
              type='submit' disabled={formState.isSubmitting}>Зарегистрироваться</button>
      <p className={'popup__span-text'}>Уже зарегистрированы? 
        <Link replace to='/signin' className='popup__span-link'> Войти</Link>
      </p>
    </EntryForm>
  )  
}

export default Register;