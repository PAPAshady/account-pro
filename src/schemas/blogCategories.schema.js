import z from 'zod';

export const blogCategoriesSchema = z.object({
  title: z
    .string({ message: 'تیتر دسته بندی باید یک رشته باشد.' })
    .trim()
    .min(1, { message: 'تیتر دسته بندی را وارد کنید.' }),
  latinTitle: z
    .string({ message: 'تیتر لاتین دسته بندی باید یک رشته متنی باشد.' })
    .trim()
    .min(1, { message: 'تیتر لاتین دسته بندی را وارد کنید.' }),
  slug: z
    .string({ message: 'شناسه دسته بندی باید یک رشته متنی باشد.' })
    .trim()
    .min(1, { message: 'شناسه دسته بندی را وارد کنید.' }),
  iconName: z
    .string({ message: 'نام آیکون دسته بندی باید یک رشته باشد.' })
    .trim()
    .min(1, { message: 'نام آیکون دسته بندی را وارد کنید.' }),
});
