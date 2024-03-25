import { star } from "../Assets/Icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h=[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <p className="text-2xl font-montserrat text-normal text-slate-gray font-bold">
          {rating}
        </p>
        <img src={star} alt="rating" width={24} height={24} />
      </div>
      <h3 className="mt-2 text-2xl leading-normal text-slate-gray font-palanquin font-semibold">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
