import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.scss";
const Textfield = ({ label, placeholder,required , ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
      required={required}
        placeholder={placeholder}
        className={`${"input"} ${meta.touched && meta.error && "is-invalid"}`}
        label={label}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        {...field}
        {...props}
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
