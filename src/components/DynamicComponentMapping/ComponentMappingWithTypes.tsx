import { useState } from 'react';
import ComponentA from './ComponentsToBeMapped/ComponentA';
import ComponentB from './ComponentsToBeMapped/ComponentB';
import ComponentC from './ComponentsToBeMapped/ComponentC';

//Define the possible component options
type ComponentKey = 'componentA' | 'componentB' | 'componentC';

//Map components to their keys
const componentMap: Record<ComponentKey, React.FC> = {
  componentA: ComponentA,
  componentB: ComponentB,
  componentC: ComponentC,
};

const ComponentMappingWithTypes = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>('componentA');

  //Dynamic component selection
  const SelectedComponent = componentMap[selectedComponent];

  return (
    <article className="example-container">
      <h2>Component Mapping with Types:</h2>

      <label>
        Choose a subject:{' '}
        <select
          value={selectedComponent}
          onChange={(e) =>
            setSelectedComponent(e.target.value as ComponentKey)
          }>
          <option value="componentA">Component A</option>
          <option value="componentB">Component B</option>
          <option value="componentC">Component C</option>
        </select>
      </label>

      {/* Added error handling */}
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <div>Please choose a section in the dropdown.</div>
      )}
    </article>
  );
};

export default ComponentMappingWithTypes;
