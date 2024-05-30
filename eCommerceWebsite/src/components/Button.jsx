import React from "react";

function Button({
    children,
    type = 'button',
    className = '',
    ...props
}) {
    return <button className={`mr-6 mt-14 px-9 font-light text-base duration-500 hover:border-[#E5E7EB] hover:bg-transparent hover:text-black border-[#5F3AFC] border-2 py-[10px] bg-[#5F3AFC] text-white rounded-lg ${className}`} {...props}>{children}</button>
}

export default Button;