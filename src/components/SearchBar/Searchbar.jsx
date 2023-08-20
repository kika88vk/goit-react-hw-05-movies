import React, { useState } from 'react';

function Searchbar({ value, onChange }) {
  const [valueQuery, setValueQuery] = useState('');

  const changeHandler = evt => {
    setValueQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onChange(valueQuery);
    setValueQuery('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search . . . "
          value={valueQuery}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default Searchbar;
