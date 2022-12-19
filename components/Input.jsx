export const Input = ({
  label,
  type,
  name,
  autoComplete,
  placeholder,
  required,
  value,
  onChange,
  ...rest
}) => {
  const fieldId = label.replace(' ', '-').toLowerCase();
  return (
    <div {...rest}>
      <label htmlFor={fieldId} className="sr-only">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="relative block w-full appearance-none rounded mb-2 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};
