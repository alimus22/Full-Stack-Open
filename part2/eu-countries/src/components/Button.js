import React from "react";

const Button = ({ onClickFunction, string1, string2, boolean }) => {
  return (
    <button onClick={() => onClickFunction(!boolean)}>
      {boolean ? string1 : string2}
    </button>
  );
};

export default Button;
