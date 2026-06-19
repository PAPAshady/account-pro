import { BASE_URL } from '@/constants';

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/plans`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
    },
  ];
}
