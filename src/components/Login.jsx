import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.info(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/home");
      })
      .catch((err) => {
        console.info(err);
      });
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    const logEmail = document.getElementById("email-log").value;
    const logPassword = document.getElementById("password-log").value;

    if (!logEmail || !logPassword) {
      return alert("silahkan lengkapi data");
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, logEmail, logPassword)
      .then((user) => {
        console.info(user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleRegister = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    if (!email || !password || !password2) {
      return alert("silahkan lengkapi data");
    } else if (password !== password2) {
      return alert("password harus sama");
    } else if (password.length < 6) {
      return alert("password harus lebih dari 6 karakter");
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.info(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="section">
        <section className="body">
          <div className="section">
            <div className="container">
              <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-5">
                  <div className="pb-5 pt-5 pt-sm-2 text-center">
                    <h6 className="mb-0 pb-3">
                      <span>Log In </span>
                      <span>Sign Up</span>
                    </h6>
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="reg-log"
                      name="reg-log"
                    />
                    <label htmlFor="reg-log"></label>
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <div className="center-wrap">
                            <div className="text-center">
                              <h4 className="mb-4 pb-3">Log In</h4>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-style"
                                  placeholder="Your Email"
                                  id="email-log"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-style"
                                  placeholder="Your Password"
                                  id="password-log"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <div className="d-inline-flex flex-column">
                                <a
                                  href="#"
                                  className="button mt-4"
                                  onClick={handleEmailLogin}
                                  type="submit"
                                >
                                  submit
                                </a>
                                <a
                                  href="#"
                                  className="button mt-4"
                                  type="button"
                                  onClick={handleGoogleLogin}
                                >
                                  Login With Google
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* bates card */}

                        <div className="card-back">
                          <div className="center-wrap">
                            <div className="text-center">
                              <h4 className="mb-4 pb-3">Sign Up</h4>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-style"
                                  placeholder="Your Email"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  className="form-style"
                                  placeholder="Your Password"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  name="password2"
                                  id="password2"
                                  className="form-style"
                                  placeholder="Confirm Your Password"
                                  autoComplete="off"
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <a
                                href="#"
                                className="button mt-4"
                                onClick={handleGoogleRegister}
                                type="button"
                              >
                                submit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
