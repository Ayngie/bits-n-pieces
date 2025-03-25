interface ToggleWithPropsProps {
  buttonText: string;
  toggleFunction: () => void; //Accept the function as a prop
}

const ToggleWithProps: React.FC<ToggleWithPropsProps> = ({
  buttonText,
  toggleFunction,
}) => {
  return (
    <>
      <button onClick={toggleFunction}>{buttonText}</button>
      {/* <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button> */}
    </>
  );
};

export default ToggleWithProps;
