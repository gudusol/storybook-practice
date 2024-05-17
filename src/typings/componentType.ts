import React from 'react';

export interface InputFormProps {
  title: string;
  type?: string;
  placeholder?: string;
  value?: string;
  infoText?: string;
  error?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  variant?: string;
  size?: string;
  onClick?: () => void;
}

export interface ButtonContainerProps {
  variant?: string;
  size?: string;
}
