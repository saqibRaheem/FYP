import React ,{useState}from 'react'
import "./ChangePassword.scss";
import { Form, Formik } from "formik";
import TextField from "../TextField/TextField";
import Button from "../Buttons/Button"
import {changePassValidation} from "../../validations/validation"
import {changePassword} from '../../Lib/User.helper'
export default function ChangePassword() {
  const [loading,setLoading] = useState(false)
  return (
    <div className="change-pass-main">
      <div className="change-pass">

      <h2>Change Password</h2>
      <Formik
      initialValues={{
        password: "",
        newpassword: "",
      }}
      validationSchema={changePassValidation}
      onSubmit={(values,{resetForm})=>{
        let {password,newpassword}  = values
        changePassword(password,newpassword,setLoading,resetForm)
      }}
      >
        <Form>
          <div className='change-pass-form'>
            <TextField
              label="Old Password"
              name="password"
              type="password"
              placeholder="Enter Old Password"
            /><br/>
            <TextField
              label="New Password"
              name="newpassword"
              type="password"
              placeholder="Enter New Password"
            /><br/>
            <Button text="save changes" type="submit" loading={loading}/>
          </div>
        </Form>
      </Formik>
    </div>
    </div>

  );
}
