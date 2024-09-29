// components/CustomInput.tsx
import "../app/globals.css";

interface CustomInputProps {
  placeholder: string;
  className?: string;
  mainClassName?: string;
  type: string;
  value: string; // Add value prop to control the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Ensure correct event type
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  className = "",
  mainClassName = "",
  type,
  value,
  onChange,
}) => {
  return (
    <div className={`${mainClassName} flex`}>
      <label className="relative">
        <input
          type={type}
          value={value} // Controlled input value
          onChange={onChange} // Handle change event
          className={`${className} border-2 px-2 py-2 border-black focus:border-blue-600 rounded-md focus:text-black outline-none`}
          placeholder=" "
          id={placeholder} // Use placeholder as id for accessibility
        />
        <span className="top-1 left-0 absolute mx-2 p-1 transition duration-200 input-text">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default CustomInput;
