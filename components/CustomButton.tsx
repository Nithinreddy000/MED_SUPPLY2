import React from 'react';

type CustomProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Restrict to button types
  variant?: "contained" | "outlined" | "text"; // Define supported variants
};

const CustomButton = ({ className, children, onClick, type = "button", variant = "contained" }: CustomProps) => {
  // Define styles based on the variant prop
  const variantStyles = {
    contained: "bg-black text-white border-black hover:bg-white hover:text-black",
    outlined: "bg-transparent border-black text-black hover:bg-black hover:text-white",
    text: "bg-transparent text-black hover:text-gray-700",
  };

  return (
    <div className="h-full">
      <button
        type={type}
        onClick={onClick}
        className={`border-[1px] px-4 rounded-[0.25rem] transition-all duration-[250ms] ${variantStyles[variant]} ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
