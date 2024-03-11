import React from 'react';
import './Button.scss';

type TypeButton = 'reset' | 'submit' | 'button';

interface Props {
  type?: TypeButton;
  children: React.ReactNode;
  $primary?: boolean;
  $secondary?: boolean;
  isValid?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  type,
  $primary,
  $secondary,
  isValid,
}) => {
  const buttonClasses = `Button${$primary ? ' Button--primary' : ''}${
    $secondary ? ' Button--secondary' : ''
  }`;
  const primDisable = !isValid && $primary ? `Button--primary-disabled` : '';

  return (
    <button
      type={type} // eslint-disable-line react/button-has-type
      disabled={!isValid}
      className={`${buttonClasses} ${primDisable}`}
      aria-label="contact us"
    >
      <span className="Button__text">{children}</span>
      <span className="Button__arrow">&#8594;</span>
    </button>
  );
};
