import React from "react";
import { cn } from "../lib/utils"; 

export default function TextFormField({
    labelText,
    leftIcon,
    rightIcon,
    textColor = "text-black",
    textSize = "text-base",
    rounded = "rounded-2xl",
    type = "text",
    enabled = true,
    value,
    onChange,
    className, 
}) {
    return (
        <div
            className={cn(
                "w-full flex items-center border-2 transition-colors relative group",
                rounded,
                enabled ? "opacity-100" : "opacity-50 pointer-events-none",
                "border-gray-400 bg-gray-100 focus-within:border-green-600 focus-within:bg-green-100",
                className 
            )}
            tabIndex={0}
        >
            {leftIcon && <div className="flex items-center pl-2">{leftIcon}</div>}

            <div className="relative w-full">
                <input
                    type={type}
                    id={labelText}
                    className={cn(
                        "block py-3 px-2 w-full bg-transparent border-none focus:outline-none focus:ring-0 peer",
                        textColor,
                        textSize
                    )}
                    placeholder=""
                    value={value}
                    onChange={onChange}
                    disabled={!enabled}
                />
                <label
                    htmlFor={labelText}
                    className={cn(
                        "absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 transition-all rounded-2xl",
                        textSize,
                        "text-gray-400 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4",
                        "bg-gray-100 peer-focus:bg-green-100"
                    )}
                >
                    {labelText}
                </label>
            </div>

            {rightIcon && <div className="flex items-center pr-2">{rightIcon}</div>}
        </div>
    );
}
