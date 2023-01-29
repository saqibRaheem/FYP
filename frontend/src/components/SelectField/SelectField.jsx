import React, { Component } from "react";
import Select from "react-select";
import "./SelectField.scss";
const MyComponent = ({
  customClass,
  options,
  label,
  placeholder,
  onChange,
  value,
  name,
}) => {
  return (
    <div className={customClass}>
      <label>{label}</label>
      <Select
        options={options}
        placeholder={placeholder}
        className="select select-field"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default MyComponent;
