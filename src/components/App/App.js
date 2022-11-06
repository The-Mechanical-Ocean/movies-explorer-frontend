import React from "react";
import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import okImg from "../../images/infotooltip__ok-auth.svg";
import errorImg from "../../images/infotooltip__error-auth.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import { api } from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const navigate = useNavigate();
  const [isHeader, setIsHeader] = React.useState(false);
  const [isFooter, setIsFooter] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [infoTooltipOpenDone, setInfoTooltipOpenDone] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");
  const [infoTooltipOpenErr, setInfoTooltipOpenErr] = React.useState(false);
  const [errStatusMessage, setErrStatusMessage] = React.useState("");

  useEffect(() => {
    setIsHeader(
      location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile" ||
        location.pathname === "/signin" ||
        location.pathname === "/signup"
    );

    setIsFooter(
      location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies"
    );
  }, [location.pathname]);

  useEffect(() => {
    handleCheckToken();
    if (jwt) {
      api
        .getProfile()
        .then((resProfile) => {
          setCurrentUser(resProfile);
        })
        .catch((err) => {
          setInfoTooltipOpenErr(true);
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [jwt]);

  useEffect(() => {
    if (jwt) {
      api
        .getSavedMovies()
        .then((resSavedMovie) => {
          setSavedMovies(
            resSavedMovie.filter((i) => i.owner._id === currentUser._id)
          );
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [currentUser, jwt]);

  function closeAllPopups() {
    setInfoTooltipOpenDone(false);
    setInfoTooltipOpenErr(false);
  }

  function handleOnRegister(password, email, name) {
    api
      .register(password, email, name)
      .then((res) => {
        if (res) {
          setStatusMessage("Вы успешно зарегистрировались!");
          setInfoTooltipOpenDone(true);
          setCurrentUser(res);
          handleOnLogin(password, email);
        }
      })
      .catch((err) => {
        if (err === 409) {
          setErrStatusMessage("Пользователь с этим e-mail уже существует");
          setInfoTooltipOpenErr(true);
        }
        if (err === 500) {
          setErrStatusMessage("Ошибка сервера");
          setInfoTooltipOpenErr(true);
        }
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setInfoTooltipOpenErr(true));
  }

  function handleOnLogin(password, email) {
    api
      .authorize(password, email)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err === 401) {
          setErrStatusMessage("Пользователь с этим e-mail не зарегистрирован");
          setInfoTooltipOpenErr(true);
        }
        if (err === 409) {
          setErrStatusMessage("Пользователь с этим e-mail уже существует");
          setInfoTooltipOpenErr(true);
        }
        if (err === 500) {
          setErrStatusMessage("Ошибка сервера");
          setInfoTooltipOpenErr(true);
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDeleteMovie(card) {
    api
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        if (err === 500) {
          setErrStatusMessage("Ошибка сервера");
          setInfoTooltipOpenErr(true);
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleEditProfile(name, email) {
    api
      .editProfile(name, email)
      .then((resProfile) => {
        setCurrentUser(resProfile);
        setStatusMessage("Ваши данные успешно изменены");
        setInfoTooltipOpenDone(true);
      })
      .catch((err) => {
        if (err === 409) {
          setErrStatusMessage("Пользователь с этим e-mail уже существует");
          setInfoTooltipOpenErr(true);
        }
        if (err === 500) {
          setErrStatusMessage("Ошибка сервера");
          setInfoTooltipOpenErr(true);
        }
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setCurrentUser({});
    navigate("/");
  }

  function handleCheckToken() {
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            console.log("success");
          }
        })
        .catch((err) => {
          setErrStatusMessage("Ошибка авторизации");
          setInfoTooltipOpenErr(true);
          handleLogout();
          console.log(`Ошибка: ${err}`);
        });
    }
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        {isHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={
              jwt ? (
                <Navigate replace to="/movies" />
              ) : (
                <Register onSubmit={handleOnRegister} />
              )
            }
          />
          <Route
            path="/signin"
            element={
              jwt ? (
                <Navigate replace to="/movies" />
              ) : (
                <Login onSubmit={handleOnLogin} />
              )
            }
          />
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route
              path="/movies"
              element={
                <Movies
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  handleLogout={handleLogout}
                  handleCheckToken={handleCheckToken}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onEditProfile={handleEditProfile}
                  handleLogout={handleLogout}
                />
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <InfoTooltip
          name={"info-tool"}
          onClose={closeAllPopups}
          isOpenDone={infoTooltipOpenDone}
          isOpenErr={infoTooltipOpenErr}
          img={infoTooltipOpenDone ? okImg : infoTooltipOpenErr ? errorImg : ""}
          text={
            infoTooltipOpenDone
              ? statusMessage
              : infoTooltipOpenErr && errStatusMessage
          }
        />
        {isFooter && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
