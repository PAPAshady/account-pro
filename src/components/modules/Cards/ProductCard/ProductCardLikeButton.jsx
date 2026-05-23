'use client';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import { toggleProductFavoriteStatusMutaitonOptions } from '@/queries/favorites';
import Skeleton from '@modules/Skeleton/Skeleton';

export default function ProductCardLikeButton({ isFavorite, id }) {
  const { mutate, isPending } = useMutation(toggleProductFavoriteStatusMutaitonOptions());

  if (isPending) {
    return (
      <Skeleton className="grid size-10.5 shrink-0 place-content-center rounded-lg rounded-tr-sm text-[23px] text-white/20">
        <FaRegHeart />
      </Skeleton>
    );
  }

  return (
    <button
      onClick={() => mutate(id)}
      className="bg-foreground text-primary grid size-10.5 shrink-0 cursor-pointer place-content-center rounded-lg rounded-tr-sm text-[23px] hover:bg-[#ffffff28]"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
