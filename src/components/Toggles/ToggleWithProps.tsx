interface ToggleWithPropsProps {
  buttonText?: string;
  toggleFunction?: () => void; //Accept the function as a prop
}

const ToggleWithProps: React.FC<ToggleWithPropsProps> = ({
  buttonText,
  toggleFunction,
}) => {
  return (
    <div>
      <button onClick={toggleFunction}>{buttonText}</button>
    </div>
  );
};

export default ToggleWithProps;
