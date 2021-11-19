import "./login.css";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  function validateFormData({ name, value }) {
    let error = "";

    if (name === "username" && !value) {
      error = "Username không được rỗng";
    }
    if (name === "password") {
      if (!value) error = "Password không được rỗng";
      else if (value.length < 6) error = "Password không nhỏ hơn 6 ký tự";
    }
    return error;
  }
  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const error = validateFormData({ name, value });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
    console.log("name", name);
  }

  function checkFormIsValid() {
    if (
      !formData.username.value ||
      !formData.password.value ||
      formData.username.error ||
      formData.password.error
    ) {
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = checkFormIsValid();
    if (!isValid) {
      console.log("dsfsàdsa");
      return;
    }
    console.log("thành công");
  }
  return (
    <main className="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back, Chris</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="img\avatars\avatar.jpg"
                        alt="Chris Wood"
                        className="img-fluid rounded-circle"
                        width={132}
                        height={132}
                      />
                    </div>
                    <form>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <small>
                          <a href="pages-reset-password.html">
                            Forgot password?
                          </a>
                        </small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox align-items-center">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="remember-me"
                            name="remember-me"
                            defaultChecked
                          />
                          <label className="custom-control-label text-small">
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <a
                          href="dashboard-default.html"
                          className="btn btn-lg btn-primary"
                        >
                          Sign in
                        </a>
                        {/* <button type="submit" class="btn btn-lg btn-primary">Sign in</button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
