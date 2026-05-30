'use client';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import SearchBox from '@modules/SearchBox/SearchBox';
import useDebounce from '@/hooks/useDebounce';
import { searchItemsQueryOptions } from '@/queries/search';

export default function GlobalSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const { data } = useQuery(searchItemsQueryOptions(debouncedValue));

  return <SearchBox value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />;
}
