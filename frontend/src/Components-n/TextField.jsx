import React from "react";

export default function TextField({ placeholder, type, className, style, value, onChange }) {
  return (
    <input
      className={`bg-white text-black rounded-md border border-gray-400 h-8 p-3 focus:outline-none focus:ring-1 placeholder:text-slate-400 placeholder:italic placeholder:text-sm ${className}`}
      placeholder={placeholder}
      style={style}
      {...(value !== undefined && value !== null ? { value: value } : {})}
      {...(onChange ? { onChange: onChange } : {})}
      type={type}
    ></input>
  );
}
