import { useState } from 'react';
import Buttons from '../../Buttons';
import Forms from '../../Forms';
import Selects from '../../Selects';

//Define the possible component options
type ComponentKey = 'buttons' | 'forms' | 'selects';

//Map components to their keys
const componentMap: Record<ComponentKey, React.FC> = {
  buttons: Buttons,
  forms: Forms,
  selects: Selects,
};

const ComponentMappingWithTypes = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentKey>('buttons');

  //Dynamic component selection
  const SelectedComponent = componentMap[selectedComponent];

  return (
    <div>
      <h2>Component Mapping with Types</h2>

      <label>
        Choose a subject:{' '}
        <select
          value={selectedComponent}
          onChange={(e) =>
            setSelectedComponent(e.target.value as ComponentKey)
          }>
          <option value="buttons">Buttons</option>
          <option value="forms">Forms</option>
          <option value="selects">Selects</option>
        </select>
      </label>
      {/* Added error handling */}
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <div>Please choose a section in the dropdown.</div>
      )}
    </div>
  );
};

export default ComponentMappingWithTypes;
