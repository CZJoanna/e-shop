import React from "react";

const Button = ({ children, isGoogle, ...otherProps }) => (
  <button className={`${isGoogle ? "btn--google" : ""} btn`} {...otherProps}>
    {children}
  </button>
);

export default Button;
