import Image from "next/image";
import React from "react";

const PopularProductCard = ({
  imgUrl,
  name,
  price,
}: {
  imgUrl: any;
  name: any;
  price: any;
}) => {
  return (
    <div className="p-2 flex flex-1 flex-col w-full max-sm:w-full shadow-xl rounded-xl drop-shadow-3xl">
      <Image src={imgUrl} alt={name} className="" width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={`/icons/star.svg`} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-moneserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
