import { CardRotate } from "../../ui/CardRotate";

const ProductDesThree = () => {
  return (
    <div className="mt-[5em] w-full grid lg:grid-cols-2 grid-cols-1 lg:-mt-16">
      <div className="sm:-mt-40 -mt-10">
        <CardRotate />
      </div>
      <div className="mr-2 flex flex-col gap-5 sm:mt-0 -mt-40">
        <h1 className=" text-[#18dae4] font-semibold text-3xl lg:mb-3 mt-4">
          WHO WE ARE
        </h1>
        <h2 className="font-semibold md:text-5xl sm:text-3xl text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h2>
        <p className=" font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero
          cum nemo sint quas autem non consequatur, ullam dicta inventore
          repellat dolorem tenetur sed iusto neque earum? Dignissimos, dolores
          dicta?
        </p>
      </div>
    </div>
  );
};

export default ProductDesThree;
