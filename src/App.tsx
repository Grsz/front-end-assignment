import React, { useState } from 'react';

import { Search } from './Search';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState('');

  const handleSearch = (searchValue: string) => {
    setIsLoading(true);

    fetch(`http://localhost:4000/api/ships/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <Search isLoading={isLoading} onSearch={handleSearch} />
      <span>{data}</span>
    </div>
  );
}

export default App;
