import React, { useState } from "react";
import Header from "../components/Header/Header";
import FormSlider from "../components/FormSlider/FormSlider";
import { Form, Formik } from "formik";
import TextField from "../components/TextField/TextField";
import Button from "../components/Buttons/Button";
import { loginValidation } from "../validations/validation";
import { Link, useHistory } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { login } from "../Lib/User.helper";
import { useDispatch } from "react-redux";
import userStatus from "../store/action/index";
import "./Pages.scss";
export default function Login() {
  const [loading, setLoading] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <FormSlider text="login" />
      <div className="form-main">
        <div className="form">
          <h3>Login</h3>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={(values, resetForm) => {
              let { password, email } = values;
              login(
                password,
                email,
                setLoading,
                resetForm,
                history,
                dispatch,
                userStatus
              );
            }}
          >
            <Form>
              <TextField name="email" type="email" placeholder="Email" />
              <br />
              <TextField
                name="password"
                type="password"
                placeholder="Password"
              />
              <br />
              <Button text="Submit" fullwidth type="submit" loading={loading} />
              <Link to="signup" className="login-link">
                <p>Don't have an account?</p>
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
}
