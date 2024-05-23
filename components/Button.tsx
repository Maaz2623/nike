import Image from "next/image";
import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red  text-white border-coral-red"
      }
      rounded-full
      ${fullWidth && "w-full"}
      `}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full "
          width={25}
          height={25}
        />
      )}
    </button>
  );
};

export default Button;
