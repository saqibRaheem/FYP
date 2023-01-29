import React from "react";
import "./Button.scss";
import Loader from "../Loader/Loader";
const Button = ({
  text,
  Icon,
  fullwidth,
  type,
  className,
  onClick,
  loading,
  disabled
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled ? true : false}
      className={
         ` ${disabled && "btn_disabled"} ${loading && "loading-bg"} ${className ? className : "btn"} ${fullwidth && "full-width"}`
      }
      onClick={onClick}
    >
      {loading ? <Loader size="20" /> : text}
    </button>
  );
};

export default Button;
