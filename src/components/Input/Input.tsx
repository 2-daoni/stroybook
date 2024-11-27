import React from 'react';

export interface InputProps {
  /** Input placeholder */
  placeholder: string;
  /** Optional Change handler */
  onChange?: () => void;
}

/** Primary UI component for user interaction */
export const Input = ({
  placeholder,
  ...props
}: InputProps) => {
  return (
    <input placeholder={placeholder} {...props}/>
  );
};
