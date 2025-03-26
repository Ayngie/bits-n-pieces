interface ButtonWithPropsProps {
  buttonText: string;
  type?: 'button' | 'reset' | 'submit';
  toggleFunction?: () => void; //Accept the function as a prop
}

const ButtonWithProps: React.FC<ButtonWithPropsProps> = ({
  buttonText,
  type = 'button', //default value
  toggleFunction,
}) => {
  return (
    <button type={type} onClick={toggleFunction}>
      {buttonText}
    </button>
  );
};

export default ButtonWithProps;
