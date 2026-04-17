import {
  FaVectorSquare,
  FaClock,
  FaWallet,
  FaCheck,
  FaLanguage,
  FaUser,
  FaSearch,
  FaShoppingBasket,
  FaRegHeart,
  FaRegComment,
  FaPhone,
  FaRegUser,
  FaGripLines,
  FaRegNewspaper,
  FaRegComments,
  FaRedo,
} from 'react-icons/fa';

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

export const plans = [
  { id: 1, title: 'یکماهه', price: 150_000 },
  { id: 2, title: 'سه ماهه', price: 250_000 },
  { id: 4, title: 'یکساله', price: 120_000 },
];

export const productPlans = [
  {
    id: 1,
    type: 'Premium Family',
    title: 'پرمیوم فمیلی',
    options: [
      {
        id: 1,
        title: 'تا ۶ حساب کاربری جداگانه',
        description:
          'این پلن به هر عضو خانواده یک حساب مستقل با پلی‌لیست‌ها و پیشنهادات شخصی اختصاص می‌دهد.',
      },
      {
        id: 2,
        title: 'بدون تبلیغات',
        description: 'تمام اعضا می‌توانند بدون مزاحمت تبلیغات، موسیقی گوش دهند.',
      },
      {
        id: 3,
        title: 'بدون تبلیغات',
        description: 'تمام اعضا می‌توانند بدون مزاحمت تبلیغات، موسیقی گوش دهند.',
      },
      {
        id: 4,
        title: 'کنترل والدین',
        description: ' قابلیت تنظیم و محدود کردن محتوای مناسب برای کودکان در دسترس است.',
      },
    ],
  },
  {
    id: 2,
    type: 'Premium Individual',
    title: 'پرمیوم تک کاربره',
    options: [
      {
        id: 1,
        title: 'بدون تبلیغات',
        description: 'تمام اعضا می‌توانند بدون مزاحمت تبلیغات، موسیقی گوش دهند.',
      },
      {
        id: 2,
        title: 'پخش آفلاین',
        description: 'قابلیت دانلود موسیقی و گوش دادن بدون نیاز به اینترنت در هرکجا که اراده کنید.',
      },
      {
        id: 3,
        title: 'کیفیت صدای بالاتر',
        description: 'دسترسی به بیش از ۱۰۰.۰۰۰.۰۰۰ موسیقی و پادکست با کیفیت صدای باورنکردنی.',
      },
      {
        id: 4,
        title: 'کنترل کامل موسیقی',
        description:
          'امکان انتخاب موسقی٬ بدون محدودیت در پرش (skip) آهنگ‌ها یا نیاز به حالت پخش تصادفی (Shuffle)',
      },
    ],
  },
  {
    id: 3,
    type: 'Premium Duo',
    title: 'پرمیوم دو کاربره',
    options: [
      {
        id: 1,
        title: 'دو حساب جداگانه',
        description: 'هر کاربر اکانت شخصی خود را با تنظیمات و پلی‌لیست‌های جداگانه دارد.',
      },
      {
        id: 2,
        title: 'ارزان‌تر از دو اشتراک تک‌کاربره',
        description: 'برای زوج‌ها یا دوستانی که باهم زندگی می‌کنند مقرون‌به‌صرفه‌تر است.',
      },
      {
        id: 3,
        title: 'پلی‌لیست Duo Mix',
        description: 'لیستی ترکیبی و خودکار از آهنگ‌های موردعلاقه هر دو کاربر پلن Duo است.',
      },
      {
        id: 4,
        title: 'بدون تبلیغات',
        description: 'تمام اعضا می‌توانند بدون مزاحمت تبلیغات، موسیقی گوش دهند.',
      },
    ],
  },
];

export const currentAccountActivationSteps = [
  {
    id: 1,
    title: 'انتخاب نوع اشتراک',
    description:
      'اشتراک دلخواه خود را (مثلاً فردی، دو نفره یا خانوادگی) از لیست محصولات سایت انتخاب کنید و روی گزینه “افزودن به سبد خرید” کلیک کنید.',
  },
  {
    id: 2,
    title: 'ثبت اطلاعات کاربری اسپاتیفای',
    description:
      'در فرم ارائه‌شده، ایمیل یا نام کاربری حساب اسپاتیفای خود را به همراه رمز اکانت خود وارد کنید. اطمینان حاصل کنید که اطلاعات واردشده صحیح باشد.',
  },
  {
    id: 3,
    title: 'تکمیل پرداخت',
    description:
      'روش پرداخت موردنظر خود را انتخاب کرده و هزینه اشتراک را از طریق درگاه پرداخت ایمن سایت واریز کنید.',
  },
  {
    id: 4,
    title: 'تأیید سفارش',
    description:
      'پس از تکمیل خرید، یک پیام یا ایمیل تأیید شامل جزئیات سفارش و وضعیت پردازش دریافت خواهید کرد.',
  },
  {
    id: 5,
    title: 'فعال‌سازی اشتراک',
    description:
      'در ادامه اکانتیتو اشتراک پرمیوم را با توجه به نوع اشتراک انتخاب شده توسط شما بر روی اکانت شما فعال میکند.',
  },
  {
    id: 6,
    title: 'استفاده از اشتراک پرمیوم',
    description:
      'پس از فعال شدن اشتراک پرمیوم اکانت پرو با ارسال یک ایمیل این موضوع را به شما اطلاع میدهد. اکنون میتوانید از موسیقی دلخواهتان لذت ببرید!',
  },
];

export const newAccountActivationSteps = [
  {
    id: 1,
    title: 'انتخاب نوع اشتراک',
    description:
      'اشتراک دلخواه خود را (مثلاً فردی، دو نفره یا خانوادگی) از لیست محصولات سایت انتخاب کنید و روی گزینه “افزودن به سبد خرید” کلیک کنید.',
  },
  {
    id: 2,
    title: 'تکمیل پرداخت',
    description:
      'روش پرداخت موردنظر خود را انتخاب کرده و هزینه اشتراک را از طریق درگاه پرداخت ایمن سایت واریز کنید.',
  },
  {
    id: 3,
    title: 'تأیید سفارش و دریافت اطلاعات اکانت',
    description:
      'پس از تکمیل خرید، یک پیام یا ایمیل تأیید شامل جزئیات سفارش و اطلاعات حساب کاربری جدید دریافت خواهید کرد. ',
  },
  {
    id: 4,
    title: 'استفاده از اشتراک پرمیوم',
    description:
      'حالا میتوانید وارد حساب کاربری خود شده و از گوش دادن به موسیقس موردعلاقه‌‌تان لذت ببرید!',
  },
];

export const productActivationImportantPoints = [
  {
    id: 1,
    title: 'اطمینان از انتخاب نوع اشتراک',
    description:
      'پیش از خرید، مطمئن شوید که نوع اشتراک (مثلاً خانوادگی، دانشجویی، یا فردی) با نیازهای شما مطابقت دارد.',
  },
  {
    id: 2,
    title: 'بررسی شرایط فعال‌سازی',
    description:
      'مطمئن شوید که اطلاعات حساب شما کامل و درست است تا اشتراک بدون مشکل روی اکانت شما فعال شود.',
  },
  {
    id: 3,
    title: 'تغییر رمز عبور بعد از فعال‌سازی',
    description:
      'برای حفظ امنیت اکانت، توصیه می‌شود بلافاصله پس از فعال‌سازی اشتراک، رمز عبور خود را تغییر دهید.',
  },
  {
    id: 4,
    title: 'بررسی سازگاری با دستگاه‌ها',
    description:
      'اطمینان حاصل کنید که دستگاه‌هایی که استفاده می‌کنید از اشتراک خریداری‌شده پشتیبانی می‌کنند.',
  },
  {
    id: 5,
    title: 'اطلاع از شرایط پشتیبانی',
    description:
      'در صورت بروز هرگونه مشکل در فرآیند فعال‌سازی یا استفاده، به پشتیبانی سایت مراجعه کنید.',
  },
  {
    id: 6,
    title: 'شرایط لغو اشتراک',
    description: 'شرایط لغو اشتراک را قبل از خرید بررسی کنید تا در آینده با مشکلی مواجه نشوید',
  },
];

export const categoryCards = [
  {
    id: 1,
    title: 'استریم فیلم و سریال',
    image: '/images/index/movie-category.png',
    alt: 'Movie and series',
  },
  {
    id: 2,
    title: 'استریم موزیک',
    image: '/images/index/music-category.png',
    alt: 'Music',
  },
  {
    id: 3,
    title: 'گرافیک و طراحی',
    image: '/images/index/graphic-category.png',
    alt: 'Graphics',
  },
  {
    id: 4,
    title: 'گیفت کارت و بازی',
    image: '/images/index/gift-category.png',
    alt: 'Gift Card',
  },
  {
    id: 5,
    title: 'هوش مصنوعی',
    image: '/images/index/ai-category.png',
    alt: 'AI',
  },
];

export const orederingWays = [
  {
    id: 1,
    title: 'ثبت نام و ورود',
    subtitle: 'Sign up',
    image: 'ordering-ways-signup.png',
    icon: <FaUser />,
  },
  {
    id: 2,
    title: 'انتخاب محصول',
    subtitle: 'Search & Choose',
    image: 'ordering-ways-search.png',
    icon: <FaSearch />,
  },
  {
    id: 3,
    title: 'افزودن به سبد خرید',
    subtitle: 'Send to Cart',
    image: 'ordering-ways-cart.png',
    icon: <FaShoppingBasket />,
  },
  {
    id: 4,
    title: 'پرداخت و ثبت سفارش',
    subtitle: 'Pay & Accept Order',
    image: 'ordering-ways-pay.png',
    icon: <FaWallet />,
  },
];

export const reviews = [
  {
    id: 1,
    name: 'یاسین جلیلی',
    account: 'اکانت پرمیوم یوتیوب',
    body: 'خیلی راضی‌ام! اکانت پرو سریع و بدون دردسر حساب‌ها رو فعال می‌کنه و پشتیبانی همیشه پاسخگوعه',
    avatar: 'profile2.png',
  },
  {
    id: 2,
    name: 'مریم مرادی',
    account: 'اکانت پرمیوم اسپاتیفای',
    body: 'خدماتشون عالیه، هم قانونی و هم با قیمت مناسب. استفاده از اکانت پرو رو پیشنهاد می‌کنم!',
    avatar: 'profile.png',
  },
];

export const footerLinks = [
  { id: 1, title: 'صفحه اصلی', href: '/' },
  { id: 2, title: 'سرویس های اکانت پرو', href: '/shop' },
  { id: 3, title: 'پلن ها', href: '/plans' },
  { id: 4, title: 'وبلاگ', href: '/blog' },
  { id: 5, title: 'درباره ما', href: '/about-us' },
  { id: 6, title: 'تماس با ما', href: '/contact-us' },
];

export const faq = [
  {
    id: 1,
    title: 'چگونه اشتراک پرمیوم اسپاتیفای را خریداری کنم؟',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  },
  {
    id: 2,
    title: 'چگونه اشتراک پرمیوم اسپاتیفای را خریداری کنم؟',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  },
  {
    id: 3,
    title: 'چرا باید رمز عبور خود را تغییر دهم؟',
    text: 'برای افزایش امنیت حساب شما، توصیه می‌کنیم پس از فعال‌سازی اشتراک، رمز عبور خود را تغییر دهید تا از دسترسی غیرمجاز جلوگیری شود.',
  },
  {
    id: 4,
    title: 'اگر اشتراک فعال نشد چه کار کنم؟',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  },
];

export const commentsBoxes = [
  {
    id: 1,
    title: 'مشتری رضایتمند!',
    number: 90,
    image: '/images/product/customers.png',
    mark: '%',
  },
  {
    id: 2,
    title: 'خرید دوباره از اکانت پرو!',
    number: 95,
    image: '/images/product/rebuy.png',
    mark: '%',
  },
  {
    id: 3,
    title: 'فعالسازی در ماه گذشته!',
    number: 6000,
    image: '/images/product/cart.png',
    mark: '+',
  },
  {
    id: 4,
    title: 'لایسنس و اشتراک مختلف!',
    number: 8,
    image: '/images/product/gift.png',
    mark: '+',
  },
];

export const licences = [
  {
    id: 1,
    title: 'پرمیوم یوتیوب یک ماهه',
    remainingTime: '۲۷ روز',
    buyTime: '۱۴۰۵.۰۱.۲۲',
    endTime: '۱۴۰۵.۰۲.۲۱',
    price: '۱,۰۰۰,۰۰۰',
  },
  {
    id: 2,
    title: 'پرمیوم اسپاتیفای سه ماهه',
    remainingTime: '۸۸ روز',
    buyTime: '۱۴۰۵.۰۱.۲۲',
    endTime: '۱۴۰۵.۰۴.۲۱',
    price: '۵,۵۰۰,۰۰۰',
  },
  {
    id: 3,
    title: 'لایسنس ویندوز ۱۱ یک ساله',
    remainingTime: '۳۶۰ روز',
    buyTime: '۱۴۰۵.۰۱.۲۲',
    endTime: '۱۴۰۶.۰۱.۲۱',
    price: '۳,۲۰۰,۰۰۰',
  },
];

export const dashboardLinks = [
  { id: 1, title: 'داشبورد', href: '/dashboard', icon: <FaVectorSquare /> },
  { id: 2, title: 'علاقه مندی ها', href: '/dashboard/favorites', icon: <FaRegHeart /> },
  { id: 3, title: 'تماس با پشتیبانی', href: '/dashboard/support', icon: <FaPhone /> },
  { id: 4, title: 'اطلاعات حساب کاربری', href: '/dashboard/profile', icon: <FaRegUser /> },
  { id: 5, title: 'اشتراک ها و لایسنس ها', href: '/dashboard/licenses', icon: <FaGripLines /> },
  { id: 6, title: 'اخبار و اطلاعیه ها', href: '/dashboard/news', icon: <FaRegNewspaper /> },
];

export const ticketsStatus = [
  { id: 1, value: '۹', title: 'همه :‌', subTitle: 'All', icon: <FaRegComments /> },
  { id: 2, value: '۳', title: 'در انتظار پاسخ :‌', subTitle: 'Waiting', icon: <FaClock /> },
  { id: 3, value: '۱', title: 'در حال بررسی : ‌', subTitle: 'Reviewing', icon: <FaRedo /> },
  { id: 4, value: '۰', title: 'پایان یافته :‌', subTitle: 'Finished', icon: <FaCheck /> },
];

export const announcements = [
  {
    id: 1,
    title: 'بروزرسانی سیاست‌ها',
    date: '1404.04.23',
    body: 'کاربر گرامی، اسپاتیفای اخیراً سیاست‌های خود را در مورد استفاده از VPN تغییر داده است. برای جلوگیری از هرگونه مشکل در دسترسی به اشتراک پرمیوم، توصیه می‌کنیم مقاله جدید ما درباره این تغییرات را مطالعه کنید. اطلاعات کامل در بخش مقالات سایت در دسترس شماست!',
  },
  {
    id: 2,
    title: 'قدردانی از همراهی شما',
    date: '۱۳۸۲.۰۳.۱۴',
    body: 'کاربر عزیز، از صبر و همراهی شما در زمان به‌روزرسانی سایت صمیمانه سپاسگزاریم. به پاس قدردانی از شما، ۳ روز عضویت رایگان به حساب شما اضافه شد تا این یک روز اختلال را جبران کنیم. امیدواریم همچنان از خدمات ما لذت ببرید!',
  },
];
