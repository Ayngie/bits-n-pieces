import { JSX, useState } from 'react';
import ComponentMappingWithTypes from '../DynamicComponentMapping/ComponentMappingWithTypes';
import ComponentMappingWithInterfaceAndArray from '../DynamicComponentMapping/ComponentMappingWithInterfaceAndArray';

const ToggleThreeChoices: React.FC = () => {
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
    <ComponentMappingWithTypes key="types" />,
    <ComponentMappingWithInterfaceAndArray key="interface_and_array" />,
  ];

  return (
    <div className="card">
      <h2>Toggle three choices!</h2>
      <button onClick={switchMapping}>Switch choice</button>

      {components[mappingIndex]}
    </div>
  );
};

export default ToggleThreeChoices;
