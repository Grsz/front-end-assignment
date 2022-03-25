import React, { ChangeEventHandler, useState } from 'react';
import MagnifyingGlass from './assets/magnifying-glass.svg';
import Cross from './assets/cross.svg';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setSearchValue(value);
  };
  return (
    <div className="inputContainer row">
      <input placeholder="Search" value={searchValue} onChange={handleChange} />
      <div className="buttons row">
        {searchValue && (
          <button>
            <img height="100%" src={Cross} alt="Search" />
          </button>
        )}
        <button className="search" disabled={!searchValue}>
          <img height="100%" src={MagnifyingGlass} alt="Search" />
        </button>
      </div>
    </div>
  );
};
