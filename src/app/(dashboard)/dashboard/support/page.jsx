import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import TableCategories from '@templates/Dashboard/Support/TableCategories';

export default function page() {
  return (
    <div>
      <div className="px-4">
        <h3 className="font-morabba text-xl font-semibold lg:text-[26px]">تماس با پشتیبانی</h3>
      </div>
      <div className="space-y-4 px-3 pt-6 md:px-4 lg:pt-6">
        <div>
          <div className="mb-4">
            <TableCategories />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-157.5 text-right">
              <thead>
                <tr className="bg-primary font-light! text-[#191919]">
                  <th className="px-2 py-2.5 font-normal sm:px-3">موضوع</th>
                  <th className="px-2 py-2.5 font-normal sm:px-3">وضعیت</th>
                  <th className="px-2 py-2.5 font-normal sm:px-3">آخرین تغییر</th>
                  <th className="px-2 py-2.5 font-normal sm:px-3">نوع</th>
                  <th className="px-2 py-2.5 font-normal sm:px-3">اولویت</th>
                  <th className="px-2 py-2.5 font-normal sm:px-3">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <tr key={index} className="bg-foreground border-t border-[rgba(0,0,0,.1)]">
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">تست</td>
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">منتظر پاسخ</td>
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">۱۴۰۵.۰۱.۲۲</td>
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">پشتیبانی فنی</td>
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">کم</td>
                      <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                        <PrimaryButton className="bg-primary text-blackColor w-full py-1.5! hover:bg-none">
                          مشاهده
                        </PrimaryButton>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
