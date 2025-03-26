import Select from './Selects/Select';
import SelectsMultiple from './Selects/SelectsMultiple';
import ComponentMappingWithTypes from './Selects/DynamicComponentMapping/ComponentMappingWithTypes';
import ComponentMappingWithInterfaceAndArray from './Selects/DynamicComponentMapping/ComponentMappingWithInterfaceAndArray';

const Selects = () => {
  return (
    <section className="card bordered-section">
      <h2>Selects:</h2>

      {/* TODO: Fix styling! */}

      <Select />
      <SelectsMultiple />
      <ComponentMappingWithTypes />
      <ComponentMappingWithInterfaceAndArray />
    </section>
  );
};

export default Selects;
