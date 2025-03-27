interface ButtonWithPropsProps {
  buttonText: string;
  type?: 'button' | 'reset' | 'submit';
  onClickFunction?: () => void; //Accept the function as a prop
}

const ButtonWithProps: React.FC<ButtonWithPropsProps> = ({
  buttonText,
  type = 'button', //default value
  onClickFunction,
}) => {
  return (
    <button type={type} onClick={onClickFunction}>
      {buttonText}
    </button>
  );
};

export default ButtonWithProps;
