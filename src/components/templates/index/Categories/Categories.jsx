import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import CategoryCard from '@modules/Cards/CategoryCard/CategoryCard';
import Particle from '@modules/Particle/Particle';
import { categoryCards } from '@/data';

export default function Categories() {
  return (
    <div className="relative">
      <Particle className="top-45 right-0 hidden size-50 opacity-50 blur-[80px] sm:block lg:top-25" />

      <div className="container">
        <div
          className="relative bg-no-repeat lg:bg-none!"
          style={{
            backgroundImage: 'url(/images/index/section-container-sm.png)',
            backgroundPositionY: 48,
            backgroundPositionX: 'center',
          }}
        >
          <div className="items-center space-y-4 lg:m-0 lg:flex lg:gap-8">
            <div>
              <h3 className="font-morabba text-center text-[26px] font-semibold lg:hidden">
                دسته بندی محصولات
              </h3>
              <h3 className="font-morabba mb-2 hidden text-center text-[26px] font-semibold lg:block">
                دسته بندی
                <br />
                محصولات
              </h3>
              <h3 className="text-paragraph font-stretchPro mb-6 text-center text-sm font-bold">
                Categories
              </h3>
              <div className="hidden lg:block">
                <PrimaryButton dir="ltr">همه دسته بندی ها</PrimaryButton>
              </div>
            </div>
            <div className="grid grow grid-cols-2 gap-4 px-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-6">
              {categoryCards.map((category) => (
                <CategoryCard key={category.id} {...category} />
              ))}
            </div>
            <div className="flex justify-center pt-3 sm:pt-1">
              <PrimaryButton dir="ltr" className="lg:hidden">
                همه دسته بندی ها
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
