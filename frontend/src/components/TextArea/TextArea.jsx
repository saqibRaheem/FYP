import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextArea.scss";
const Textfield = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <textarea
        placeholder={placeholder}
        className={`${"textArea"} ${
          meta.touched && meta.error && "is-invalid"
        }`}
        label={label}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        {...field}
        {...props}
        rows="4"
        cols="50"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        style={{
          color: "red",
          fontSize: ".8rem",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      />
    </div>
  );
};
export default Textfield;
