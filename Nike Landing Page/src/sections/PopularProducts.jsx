import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience excellence in quality and style with our exclusive
          selections. Dive into a realm where comfort, design, and value
          intertwine seamlessly with unparalleled luxury.
        </p>
      </div>
      <div>
        <div className=" mt-16 w-full ">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.name}>
                <PopularProductCard {...product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
