import React from "react";
import EntryForm from "../EntryForm/EntryForm";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import { useForm } from "react-hook-form";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "../EntryForm/EntryForm.css";

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data, e) {
    e.preventDefault();
    props.onSubmit(data.password, data.email);
  }
  return (
    <EntryForm
      name="login"
      title="Рады видеть!"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="popup__input-container">
        <p className="popup__input-span">E-mail</p>
        <input
          className="popup__input popup__input_for_entry popup__input_type_email"
          {...register("email", {
            required: true,
            validate: (input) => isEmail(input),
          })}
        />
        {errors.email && (
          <Error
            errors={
              !validator.isEmail("email") &&
              "Введены некорректные данные поля E-mail"
            }
          />
        )}
      </label>
      <label className="popup__input-container">
        <p className="popup__input-span">Пароль</p>
        <input
          className="popup__input popup__input_for_entry popup__input_type_password"
          id="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Минимальная длина пароля - 8 символов",
            },
          })}
        />
        {errors.password && <Error errors={errors.password.message} />}
      </label>
      <button
        className={
          !getValues("email") ||
          errors.email ||
          !getValues("password") ||
          errors.password
            ? "popup__button-save_inactive popup__button-save popup__button-save_for_entry"
            : "popup__button-save popup__button-save_for_entry"
        }
        type="submit"
        disabled={formState.isSubmitting}
      >
        Войти
      </button>
      <p className="popup__span-text">
        Еще не зарегистрированны?
        <Link to="/signup" className="popup__span-link">
          {" "}
          Регистрация
        </Link>
      </p>
    </EntryForm>
  );
}

export default Login;
