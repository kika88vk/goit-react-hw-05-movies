import React from 'react';

function Searchbar({ value, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Searchbar;
