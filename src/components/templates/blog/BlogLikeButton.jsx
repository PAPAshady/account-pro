'use client';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useMutation, useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import {
  toggleBlogFavoriteStatusMutaitonOptions,
  isBlogInFavoritesQueryOptions,
} from '@/queries/favorites';
import Skeleton from '@/components/modules/Skeleton/Skeleton';

export default function BlogLikeButton({ blogId }) {
  const { data: isInFavorites, isPending: isInFavoritesPending } = useQuery(
    isBlogInFavoritesQueryOptions(blogId)
  );
  const { mutate, isPending } = useMutation(toggleBlogFavoriteStatusMutaitonOptions());

  if (isInFavoritesPending || isPending) {
    return (
      <Skeleton className="grid size-12 place-content-center rounded-lg rounded-tr-sm text-3xl text-white/20">
        <FaRegHeart />
      </Skeleton>
    );
  }

  return (
    <button
      onClick={() => mutate(blogId)}
      type="button"
      className={clsx(
        'bg-foreground flex size-12 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-3xl transition-colors duration-300',
        isInFavorites ? 'text-primary' : 'hover:text-primary text-white'
      )}
    >
      {isInFavorites ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
