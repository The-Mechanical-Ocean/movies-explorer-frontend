import React from "react";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useForm } from "react-hook-form";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "./Profile.css";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setValue,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: { name: currentUser.name, email: currentUser.email },
  });

  React.useEffect(() => {
    setValue("name", currentUser.name);
    setValue("email", currentUser.email);
  }, [setValue, currentUser]);

  function onSubmit(data, e) {
    e.preventDefault();
    props.onEditProfile(data.name, data.email);
  }

  function handleNameChange(e) {
    setValueName(e.target.value);
  }

  function handleEmailChange(e) {
    setValueEmail(e.target.value);
  }

  if (!currentUser.name) {
    return <Preloader />;
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        name="edit-profile"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="profile__input-container">
          <p className="profile__input-text">Имя</p>
          <input
            className="profile__input"
            id="edit-name"
            {...register("name", {
              required: true,
              minLength: {
                value: 6,
                message: "Имя должно быть не короче 6 символов",
              },
              maxLength: {
                value: 20,
                message: "Имя должно быть не длиннее 20 символов",
              },
              pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z\- \s]*$/,
                message: "Только латиница, кириллица, пробел или дефис",
              },
              onChange: handleNameChange,
              value: valueName,
            })}
          />
        </label>
        {errors.name && <Error errors={errors.name.message} />}
        <label className="profile__input-container">
          <p className="profile__input-text" id="edit-email">
            E-mail
          </p>
          <input
            className="profile__input"
            id="edit-email"
            {...register("email", {
              required: true,
              validate: (input) => isEmail(input),
              onChange: handleEmailChange,
              value: valueEmail,
            })}
          />
        </label>
        {errors.email && (
          <Error
            errors={
              !validator.isEmail("email") &&
              "Введены некорректные данные поля E-mail"
            }
          />
        )}
        <button
          className={
            errors.name ||
            errors.email ||
            (getValues("name") === currentUser.name &&
              getValues("email") === currentUser.email)
              ? "profile__button_inactive"
              : "profile__button"
          }
          type="submit"
          disabled={formState.isSubmitting}
        >
          Редактировать
        </button>
      </form>
      <Link
        className="profile__link"
        replace
        to="/"
        onClick={props.handleLogout}
      >
        Выйти из аккаунта
      </Link>
    </main>
  );
}

export default Profile;
