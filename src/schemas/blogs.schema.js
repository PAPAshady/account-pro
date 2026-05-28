import z from 'zod';

export const blogsSchema = z.object({
  title: z
    .string({ message: 'تیتر مقاله باید یک رشته متنی باشد.' })
    .min(1, { message: 'تیتر مقاله را وارد کنید.' }),
  description: z
    .string({ message: 'توضیحات مقاله باید یک رشته متنی باشد.' })
    .min(1, { message: 'توضیحات مقاله را وارد کنید.' }),
  slug: z
    .string({ message: 'نام کوتاه مقاله باید یک رشته متنی باشد.' })
    .min(1, { message: 'نام کوتاه مقاله را وارد کنید.' }),
  readTime: z
    .number({ message: 'زمان مقاله باید یک عدد باشد.' })
    .min(1, { message: 'زمان مقاله باید حداقل ۱ دقیقه باشد.' }),
  content: z
    .string({ message: 'محتوای مقاله باید یک رشته متنی باشد.' })
    .min(10, { message: 'محتوای مقاله باید حداقل شامل ۱۰ کاراکتر باشد.' }),
  imageFile: z.instanceof(File, { message: 'عکس مقاله باید یک فایل باشد.' }),
});
