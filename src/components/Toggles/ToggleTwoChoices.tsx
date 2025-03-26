import { useState } from 'react';
import ToggleWithProps from './ToggleWithProps';
import ComponentA from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentA';
import ComponentB from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentB';

const ToggleTwoChoices = () => {
  const [basicChoiceOn, setBasicChoiceOn] = useState<boolean>(true);

  // Create handler function to pass as prop (to change state in this component)
  const toggleChoice = () => {
    setBasicChoiceOn((prev) => !prev);
  };

  return (
    <article className="bordered-section">
      <h3>Toggle two choices:</h3>

      {/* Pass toggle function to child */}
      <ToggleWithProps
        buttonText="Toggle two choices"
        toggleFunction={toggleChoice}
      />

      {/* Show component based on which is toggled */}
      {basicChoiceOn ? <ComponentA /> : <ComponentB />}
    </article>
  );
};

export default ToggleTwoChoices;
