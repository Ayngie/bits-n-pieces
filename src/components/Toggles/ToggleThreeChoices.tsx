import { JSX, useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';
import ComponentA from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentA';
import ComponentB from '../DynamicComponentMapping/ComponentsToBeMapped/ComponentB';

const ToggleThreeChoices = () => {
  const [mappingIndex, setMappingIndex] = useState<number>(0);

  // Function to cycle through states (0->1->2->0)
  const switchMapping = (): void => {
    setMappingIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // Array of components
  const components: JSX.Element[] = [
    <div key="neutral">
      <p>Neutral choice</p>
    </div>,
    <ComponentA key="componentA" />,
    <ComponentB key="componentB" />,
  ];

  return (
    <article className="example-section">
      <h2>Toggle three choices:</h2>

      <ButtonWithProps
        buttonText="Toggle three choices"
        onClickFunction={switchMapping}
      />

      {components[mappingIndex]}
    </article>
  );
};

export default ToggleThreeChoices;
