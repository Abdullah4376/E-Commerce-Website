import React, { useId } from "react";

function Select({ options, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      <select  
        {...props}
        id={id} 
        className={className} 
        ref={ref}
      >
        {options?.map((option, index) => (
          <option 
            key={index} 
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
