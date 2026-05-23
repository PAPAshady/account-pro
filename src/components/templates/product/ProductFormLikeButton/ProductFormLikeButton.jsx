import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useQuery, useMutation } from '@tanstack/react-query';
import clsx from 'clsx';

import {
  isProductInFavoritesQueryOptions,
  toggleProductFavoriteStatusMutaitonOptions,
} from '@/queries/favorites';
import Skeleton from '@modules/Skeleton/Skeleton';

export default function ProductFormLikeButton({ productId }) {
  const { data: isInFavorites, isPending: isInFavoritesPending } = useQuery(
    isProductInFavoritesQueryOptions(productId)
  );
  const { mutate, isPending } = useMutation(toggleProductFavoriteStatusMutaitonOptions());

  if (isInFavoritesPending || isPending) {
    return (
      <Skeleton className="grid size-8.75 place-content-center rounded-lg rounded-tr-sm text-2xl text-white/20">
        <FaRegHeart />
      </Skeleton>
    );
  }

  return (
    <button
      onClick={() => mutate(productId)}
      type="button"
      className={clsx(
        'bg-box flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300',
        isInFavorites ? 'text-primary' : 'hover:text-primary text-white'
      )}
    >
      {isInFavorites ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
