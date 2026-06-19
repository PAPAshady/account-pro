import { BASE_URL } from '@/constants';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/cart', '/checkout', '/sign-in', '/sign-up'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
