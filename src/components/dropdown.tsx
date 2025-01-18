import { twMerge } from 'tailwind-merge';

interface RootProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}
function Root({ className, ...rest }: RootProps) {
  return (
    <div
      className={twMerge('w-full text-white rounded-lg shadow-lg', className)}
      {...rest}
    />
  );
}

type LabelProps = React.HTMLProps<HTMLLabelElement>
function Label(props: LabelProps) {
  return (
    <label
      {...props}
      className="text-lg font-semibold text-gray-300 block mb-2"
    />
  );
}

interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

function Dropdown({ options, className, ...rest }: DropdownProps) {
  return (
    <select
      className={twMerge(
        'w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition ease-in-out duration-300 placeholder-gray-400',
        className
      )}
      defaultValue=""
      {...rest}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option
          className="bg-gray-800 text-gray-300 hover:bg-gray-700"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { Root, Label, Dropdown };
