import { useSearchParams, useRouter } from 'next/navigation';

export default function useCheckBoxFilterHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChecked = (key, value) => {
    const params = new URLSearchParams(searchParams);
    const paramExists = searchParams.getAll(key).includes(value);
    paramExists ? params.delete(key, value) : params.append(key, value);
    router.push(`/shop?${params.toString()}`);
  };

  return onChecked;
}
