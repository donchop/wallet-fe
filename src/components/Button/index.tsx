import React from "react";

import "./styles.css"

interface ButtonProps {
  onClick: () => void;
  title: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  color = "#0b78c5",
  title = "",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        backgroundColor: color,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
