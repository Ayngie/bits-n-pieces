import ComponentMappingWithInterfaceAndArray from './DynamicComponentMapping/ComponentMappingWithInterfaceAndArray';
import ComponentMappingWithTypes from './DynamicComponentMapping/ComponentMappingWithTypes';

const DynamicComponentMapping = () => {
  return (
    <section className="component-container">
      <h1>Dynamic Component Mapping:</h1>
      <ComponentMappingWithTypes />
      <ComponentMappingWithInterfaceAndArray />
    </section>
  );
};

export default DynamicComponentMapping;
