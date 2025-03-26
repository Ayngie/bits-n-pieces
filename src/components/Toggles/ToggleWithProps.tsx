interface ToggleWithPropsProps {
  buttonText?: string;
  toggleFunction?: () => void; //Accept the function as a prop
}

const ToggleWithProps: React.FC<ToggleWithPropsProps> = ({
  buttonText,
  toggleFunction,
}) => {
  return (
    <>
      {/* Header for when displayed as example component: */}
      {!buttonText && <h2>Toggle with props!</h2>}

      {/* Component: */}
      <button onClick={toggleFunction}>{buttonText}</button>
    </>
  );
};

export default ToggleWithProps;
