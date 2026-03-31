import CheckBox from '@modules/CheckBox/CheckBox';

export default function CheckboxFilterItem({ options }) {
  return (
    <ul className="space-y-2">
      {options.map((option) => (
        <li key={option.title}>
          <label className="bg-foreground hover:border-primary flex items-center gap-2.5 rounded-2xl rounded-tr-lg border border-[#fff0] px-3 py-2.5 transition-all duration-300">
            <CheckBox />
            <p>{option.title}</p>
          </label>
        </li>
      ))}
    </ul>
  );
}
