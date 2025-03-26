import ComponentMappingWithInterfaceAndArray from './DynamicComponentMapping/ComponentMappingWithInterfaceAndArray';
import ComponentMappingWithTypes from './DynamicComponentMapping/ComponentMappingWithTypes';

const DynamicComponentMapping = () => {
  return (
    <section className="card">
      <h2>Dynamic Component Mapping:</h2>

      <ComponentMappingWithTypes />
      <ComponentMappingWithInterfaceAndArray />
    </section>
  );
};

export default DynamicComponentMapping;
