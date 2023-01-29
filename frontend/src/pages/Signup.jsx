import React, { useState } from "react";
import Header from "../components/Header/Header";
import FormSlider from "../components/FormSlider/FormSlider";
import { Form, Formik } from "formik";
import TextField from "../components/TextField/TextField";
import Button from "../components/Buttons/Button";
import {
  signupValidation,
  signupValidationCompany,
} from "../validations/validation";
import { Link, useHistory } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SelectField from "../components/SelectField/SelectField";
import { signup } from "../Lib/User.helper";
import "./Pages.scss";
export default function Signup() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();
  return (
    <div>
      <Header textColor />
      <FormSlider text="Register" />
      <div className="form-main">
        <div className="form">
          <h3>Register</h3>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              stdId: "",
            }}
            validationSchema={
              role === "student" ? signupValidation : signupValidationCompany
            }
            onSubmit={(values, resetForm) => {
              let { stdId, username, password, email } = values;
              signup(
                stdId,
                username,
                password,
                email,
                role,
                setLoading,
                resetForm,
                history
              );
            }}
          >
            <Form>
              <TextField
                name="email"
                type="email"
                placeholder="Email"
                label="Email"
              />
              <br />
              <div className="edit-profile-form-select">
                <SelectField
                  customClass="select-field"
                  label="Registered As"
                  placeholder="Select Your Role"
                  options={[
                    { value: "student", label: "Student" },
                    { value: "company", label: "Company" },
                  ]}
                  onChange={(e) => setRole(e.value)}
                />
              </div>
              <br />
              {role === "student" && (
                <>
                  <TextField
                    name="stdId"
                    type="text"
                    placeholder="Registeration ID"
                    label="Registeration ID"
                  />
                  <br />
                </>
              )}
              <TextField
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
              />
              <br />
              <Button text="Submit" fullwidth type="submit" loading={loading} />
              <p>
                Have an account?{" "}
                <span>
                  <Link to="login" className="login-link">
                    Login
                  </Link>
                </span>{" "}
              </p>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
}
