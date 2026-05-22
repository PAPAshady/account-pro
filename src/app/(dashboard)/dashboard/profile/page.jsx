import Form from '@templates/Dashboard/Profile/Form';
import { validateUser } from '@/utils/auth';

export default async function Page() {
  const userRes = await validateUser();
  const { user } = await userRes.json();

  return (
    <div className="pb-6">
      <div className="relative">
        <div
          className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-4"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="px-4">
          <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">
            اطلاعات حساب کاربری
          </h3>
        </div>
        <Form name={user.name} phone={user.phone} />
      </div>
    </div>
  );
}
