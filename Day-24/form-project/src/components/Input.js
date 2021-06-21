import React, { Component } from "react";

const Input = ({ name, label, value, type, id, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        value={value}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        autoComplete={false}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
