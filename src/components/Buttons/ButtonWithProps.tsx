interface ButtonWithPropsProps {
  buttonText: string;
  toggleFunction?: () => void; //Accept the function as a prop
}

const ButtonWithProps: React.FC<ButtonWithPropsProps> = ({
  buttonText,
  toggleFunction,
}) => {
  return <button onClick={toggleFunction}>{buttonText}</button>;
};

export default ButtonWithProps;
