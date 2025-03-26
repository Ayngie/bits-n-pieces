import { useState } from 'react';
import ToggleWithProps from './ToggleWithProps';
import ComponentMappingWithTypes from '../Selects/DynamicComponentMapping/ComponentMappingWithTypes';
import ComponentMappingWithInterfaceAndArray from '../Selects/DynamicComponentMapping/ComponentMappingWithInterfaceAndArray';

const ToggleTwoChoices = () => {
  const [basicChoiceOn, setBasicChoiceOn] = useState<boolean>(true);

  // Create handler function to pass as prop (to change state in this component)
  const toggleChoice = () => {
    setBasicChoiceOn((prev) => !prev);
  };

  return (
    <div className="card">
      <h2>Toggle two choices!</h2>

      {/* Pass toggle function to child */}
      <ToggleWithProps
        buttonText="Toggle two choices"
        toggleFunction={toggleChoice}
      />

      {/* Show component based on which is toggled */}
      {basicChoiceOn ? (
        <ComponentMappingWithTypes />
      ) : (
        <ComponentMappingWithInterfaceAndArray />
      )}
    </div>
  );
};

export default ToggleTwoChoices;
