'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { FaCircleNotch } from 'react-icons/fa';

import SearchBox from '@modules/SearchBox/SearchBox';
import useDebounce from '@/hooks/useDebounce';
import { searchItemsQueryOptions } from '@/queries/search';

export default function GlobalSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const search = searchValue.trim();
  const debouncedValue = useDebounce(search);
  const { data, isPending } = useQuery(searchItemsQueryOptions(debouncedValue));
  const hasData = !!data?.products.length || !!data?.blogs.length;

  return (
    <div className="relative">
      <SearchBox value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      {!!search.length && (
        <div className="absolute left-0 z-1 mt-2.5 w-[130%]">
          <div className="rounded-[20px] rounded-tl-lg bg-[#252525] px-3 py-5">
            {isPending && !!search?.length && (
              <div className="grid place-content-center">
                <FaCircleNotch className="text-primary/90 animate-spin stroke-1 text-4xl" />
              </div>
            )}
            {hasData && (
              <ul className="flex max-h-65 flex-col overflow-y-auto">
                {!!data?.products.length && (
                  <span className="font-morabba text-primary/90 mb-1 px-3 text-sm">محصولات :</span>
                )}
                {data?.products.map((product) => (
                  <li key={product._id}>
                    <Link
                      onClick={() => setSearchValue('')}
                      className="hover:bg-foreground flex items-center gap-2.5 rounded-lg rounded-tr-sm p-1.75"
                      href={`/product/${product.slug}`}
                    >
                      <Image
                        width={200}
                        height={200}
                        alt={product.title}
                        src={product.images[0].url}
                        className="size-8"
                      />
                      <span className="text-sm">{product.title}</span>
                    </Link>
                  </li>
                ))}
                {!!data?.blogs.length && (
                  <span className="font-morabba text-primary/90 mt-4 mb-1 px-3 text-sm">
                    مقالات :
                  </span>
                )}
                {data?.blogs.map((blog) => (
                  <li key={blog._id}>
                    <Link
                      onClick={() => setSearchValue('')}
                      className="hover:bg-foreground flex items-center gap-2.5 rounded-lg rounded-tr-sm p-1.75"
                      href={`/blog/${blog.slug}`}
                    >
                      <Image
                        width={200}
                        height={200}
                        alt={blog.title}
                        src={blog.imageUrl}
                        className="size-8"
                      />
                      <span className="text-sm">{blog.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!isPending && !hasData && (
              <div className="text-center">
                <span>موردی یافت نشد.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
