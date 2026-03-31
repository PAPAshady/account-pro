import { FaVectorSquare, FaClock, FaWallet, FaCheck, FaLanguage } from 'react-icons/fa';

export const services = [
  { id: 1, title: 'لایسنس ویندوز ۱۱', price: '۹۰,۰۰۰', region: 'همه ریجن ها' },
  { id: 2, title: 'اکانت پرمیوم یوتیوب', price: '۱۰۰,۰۰۰', region: 'همه ریجن ها' },
  { id: 3, title: 'اکانت پرمیوم اسپاتیفای یک ماهه', price: '۲۰۰,۰۰۰', region: 'ریجن آمریکا' },
  { id: 4, title: 'اکانت پرمیوم تلگرام یک ساله', price: '۱۲۰,۰۰۰', region: 'همه ریجن ها' },
];

export const filters = [
  {
    id: 1,
    title: 'دسته بندی ها',
    subtitle: 'Categories',
    icon: <FaVectorSquare />,
    type: 'checkbox',
    options: [{ title: 'استریم فیلم و سریال' }, { title: 'استریم موزیک' }, { title: 'هوش مصنوعی' }],
  },
  {
    id: 2,
    title: 'مدت زمان اشتراک',
    subtitle: 'Time Duration',
    icon: <FaClock />,
    type: 'checkbox',
    options: [{ title: 'استریم فیلم و سریال' }, { title: 'استریم موزیک' }, { title: 'هوش مصنوعی' }],
  },
  { id: 3, title: 'محدوده قیمت', subtitle: 'Price', icon: <FaWallet />, type: 'slider' },
  {
    id: 4,
    title: 'نحوه فعال سازی',
    subtitle: 'Activation Method',
    icon: <FaCheck />,
    type: 'checkbox',
    options: [{ title: 'استریم فیلم و سریال' }, { title: 'استریم موزیک' }, { title: 'هوش مصنوعی' }],
  },
  {
    id: 5,
    title: 'زبان ها',
    subtitle: 'Language',
    icon: <FaLanguage />,
    type: 'checkbox',
    options: [{ title: 'استریم فیلم و سریال' }, { title: 'استریم موزیک' }, { title: 'هوش مصنوعی' }],
  },
];
