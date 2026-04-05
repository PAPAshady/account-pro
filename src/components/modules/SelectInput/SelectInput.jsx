export default function SelectInput({ label, icon, options, ...props }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-paragraph flex items-center gap-1 text-sm min-[380px]:text-base">
        {icon}
        <span>{label} : </span>
      </p>
      <div className="bg-box rounded-2xl rounded-tr-lg px-2">
        <select className="bg-box w-full p-4 ps-2 text-sm min-[380px]:text-base" {...props}>
          <option value="">انتخاب کنید</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
