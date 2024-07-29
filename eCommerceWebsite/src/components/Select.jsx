import React, { useId } from "react";

function Select({ className, ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      <select {...props} id={id} className={className} ref={ref}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
