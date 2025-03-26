import Select from './Selects/Select';
import SelectsMultiple from './Selects/SelectsMultiple';

const Selects = () => {
  return (
    <section className="card ">
      <h2>Selects:</h2>

      <article className="bordered-section">
        <h3>Simple select:</h3>
        <Select />
      </article>

      <article className="bordered-section">
        <h3>Multiple selects:</h3>
        <SelectsMultiple />
      </article>
    </section>
  );
};

export default Selects;
