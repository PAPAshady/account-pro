export default function layout({ children }) {
  return (
    <div>
      <div className="px-4">
        <h3 className="font-morabba text-xl font-semibold lg:text-[26px]">تماس با پشتیبانی</h3>
      </div>
      <div className="space-y-4 px-3 pt-6 md:px-4 lg:pt-6">{children}</div>
    </div>
  );
}
