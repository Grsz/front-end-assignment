import React, { ChangeEventHandler, useState, FC } from 'react';
import MagnifyingGlass from './assets/magnifying-glass.svg';
import Cross from './assets/cross.svg';

type Props = { isLoading: boolean; onSearch: (searchValue: string) => unknown };

export const Search: FC<Props> = ({ isLoading, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };
  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className="inputContainer row">
      <input placeholder="Search" value={searchValue} onChange={handleChange} />
      <div className="buttons row">
        {searchValue && (
          <button onClick={handleClear}>
            <img height="100%" src={Cross} alt="Search" />
          </button>
        )}
        <button
          className="search"
          disabled={!searchValue || isLoading}
          onClick={handleSearchClick}
        >
          <img height="100%" src={MagnifyingGlass} alt="Search" />
        </button>
      </div>
    </div>
  );
};
