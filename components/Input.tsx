import React, { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  type?: string;
}
const Input: React.FC<InputProps> = (props) => {
const {label, placeholder, name, value, type="text", onChange, ...rest} = props;
  return(
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name}  placeholder={placeholder} id={name} />
  </div>
  )

};

export default Input;
