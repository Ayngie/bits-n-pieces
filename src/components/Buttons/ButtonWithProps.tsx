interface ButtonWithPropsProps {
  buttonText?: string;
  toggleFunction?: () => void; //Accept the function as a prop
}

const ButtonWithProps: React.FC<ButtonWithPropsProps> = ({
  buttonText,
  toggleFunction,
}) => {
  return (
    <div>
      <button onClick={toggleFunction}>{buttonText}</button>
    </div>
  );
};

export default ButtonWithProps;
