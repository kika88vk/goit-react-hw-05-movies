import React, { useState } from 'react';
import { SearchFormStyled, SearchInputStyled } from './Searchbar.styled';

function Searchbar({ currentPage, onChange }) {
  const [valueQuery, setValueQuery] = useState('');

  const changeHandler = evt => {
    setValueQuery(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onChange(valueQuery, currentPage);
    setValueQuery('');
  };

  return (
    <div>
      <SearchFormStyled onSubmit={onSubmit}>
        <SearchInputStyled
          type="text"
          name="query"
          placeholder="Search . . . "
          value={valueQuery}
          onChange={changeHandler}
        />
      </SearchFormStyled>
    </div>
  );
}

export default Searchbar;
