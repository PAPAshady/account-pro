import RadioInput from '@modules/RadioInput/RadioInput';

export default function ApplePlanCard({ title, description, checked, onChange }) {
  return (
    <label className="bg-box group hover:bg-primary hover:bg-hatching rounded-box-ltr flex items-center gap-3.75 p-2.5 transition-all duration-300">
      <RadioInput
        name="appleId"
        value={title}
        checked={checked}
        onChange={onChange}
        className="group-hover:bg-[#19191955]!"
      />
      <div className="space-y-1">
        <p className="group-hover:text-blackColor line-clamp-1 transition-colors duration-300">
          {title}
        </p>
        <span className="text-primary group-hover:text-blackColor text-sm transition-colors duration-300">
          {description}
        </span>
      </div>
    </label>
  );
}
