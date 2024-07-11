import { FC, MouseEventHandler } from 'react';

interface IButton {
  buttonClass: string;
  buttonType: 'submit' | 'reset' | 'button';
  buttonText: string;
  buttonStatus?: boolean;
  handlerClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButton> = ({
  buttonClass,
  buttonType,
  buttonText,
  buttonStatus,
  handlerClick = () => {},
}) => {
  return (
    <button
      className={buttonClass}
      type={buttonType}
      disabled={buttonStatus}
      onClick={handlerClick}
    >
      {buttonText}
    </button>
  );
};
