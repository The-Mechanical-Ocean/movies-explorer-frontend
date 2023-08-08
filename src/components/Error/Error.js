import React from "react";
import "./Error.css";

const Error = ({ errors }) => {
  return <span className="error">{errors}</span>;
};

export default Error;
