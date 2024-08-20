import { CardRotate } from '../../ui/CardRotate';

const ProductDesTwo = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center overflow-y-auto overflow-x-hidden gap-5 lg:-mt-40">
      <div className="lg:block hidden">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-5">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptatem totam. Deleniti laboriosam non eaque repellendus. Repellat,
          voluptas velit sed, tenetur doloremque illo unde nemo, rem eligendi
          amet ipsum minima!
        </p>
        <div className="mb-5 sm:text-2xl text-xl">
          <p>🗸 Professionally Loaded Team</p>
          <p>🗸 Offering Premium Investment Solutions</p>
          <p>🗸 Ensuring 100% Client Satisfaction</p>
          <p>🗸 We are Fully Bonded and Insured</p>
        </div>
        <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
          Find a class
        </button>
      </div>
      <div className="">
        <CardRotate />
      </div>
      <div className="lg:hidden block -mt-36">
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mb-5">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptatem totam. Deleniti laboriosam non eaque repellendus. Repellat,
          voluptas velit sed, tenetur doloremque illo unde nemo, rem eligendi
          amet ipsum minima!
        </p>
        <div className="mb-5 sm:text-2xl text-xs">
          <p>🗸 Professionally Loaded Team</p>
          <p>🗸 Offering Premium Investment Solutions</p>
          <p>🗸 Ensuring 100% Client Satisfaction</p>
          <p>🗸 We are Fully Bonded and Insured</p>
        </div>
        <button className="bg-[#18dae4] text-black font-medium py-2 px-4 rounded transition-all hover:bg-[#0b9198] hover:text-white active:scale-95">
          Find a class
        </button>
      </div>
    </div>
  );
}

export default ProductDesTwo
