import React from "react";
import './Button.scss'
const Button = ({ handlerClick, title }) => {
  return (
    <button className="btn-primary" onClick={handlerClick}>
      {title}
    </button>
  );
};

export default Button;
