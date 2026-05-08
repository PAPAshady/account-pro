'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

import SearchBox from '@modules/SearchBox/SearchBox';

import useDebounce from '@/hooks/useDebounce';

export default function ProductsPageSearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const debouncedValue = useDebounce(searchValue);
  const prevDebounceValue = useRef(null);

  useEffect(() => {
    if (prevDebounceValue.current === debouncedValue) return;
    const params = new URLSearchParams(searchParams);

    if (debouncedValue) {
      params.set('search', debouncedValue);
    } else {
      params.delete('search');
    }
    prevDebounceValue.current = debouncedValue;
    router.push(`/shop?${params.toString()}`);
  }, [debouncedValue, searchParams, router]);

  return <SearchBox value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />;
}
