import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';
import ComponentA from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentA';
import ComponentB from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentB';

const ToggleTwoChoices = () => {
  const [basicChoiceOn, setBasicChoiceOn] = useState<boolean>(true);

  // handler function for state change in this component - to pass as prop, so as to keep this components state logic in this file.
  const toggleChoice = () => {
    setBasicChoiceOn((prev) => !prev);
  };

  return (
    <article className="example-section">
      <h2>Toggle two choices:</h2>

      {/* Passing toggle function to child */}
      <ButtonWithProps
        buttonText="Toggle two choices"
        onClickFunction={toggleChoice}
      />

      {/* Showing component based on which is toggled */}
      {basicChoiceOn ? <ComponentA /> : <ComponentB />}
    </article>
  );
};

export default ToggleTwoChoices;
