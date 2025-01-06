import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg hover:text-gray-400 transition ease-in duration-200 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}