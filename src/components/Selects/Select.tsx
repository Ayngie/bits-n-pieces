import { useState } from 'react';

const Select = () => {
  const [selected, setSelected] = useState<string>('');

  const imageMap: Record<string, { url: string; title: string }> = {
    buttons: {
      url: 'https://picsum.photos/id/8/400/300',
      title:
        'An open laptop with keyboard buttons, a notebook, a cellphone, a cup of coffee, all on a wooden table.',
    },
    forms: {
      url: 'https://picsum.photos/id/24/400/300',
      title: 'An open book, viewed from the bottom.',
    },
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const currentImage = selected ? imageMap[selected] : null;
  return (
    <article className="example-container">
      <h2>Single select:</h2>
      <fieldset>
        <legend>Select choices</legend>
        <label>
          Choose a subject:{' '}
          <select
            name="selectedSubject"
            value={selected}
            onChange={handleSelectChange}>
            <option value="neutral"></option>
            <option value="buttons">Buttons</option>
            <option value="forms">Forms</option>
          </select>
        </label>
      </fieldset>

      {selected && <img src={currentImage?.url} alt={currentImage?.title} />}
    </article>
  );
};

export default Select;
