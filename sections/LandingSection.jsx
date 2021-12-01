function LandingSection(props) {
  return (
    <>
      <section className="text-white hidden h-sortofscreen rounded-2xl md:flex  flex-col justify-center items-center p-10  bg-sortofprimary ">
        <div className="text-xl mb-3">presenting</div>
        <div className=" text-5xl font-bold w-1/3 text-center">
          Best Pre-owned Cars from Trusted Hands
        </div>
        <div className="flex mt-10">
          <div className=" m-2 p-3 bg-primary font-semibold text-white rounded-lg px-5">
            contact us
          </div>
          <div className="m-2 p-3 bg-black bg-opacity-25 font-semibold text-white rounded-lg px-5">
            view cars
          </div>
        </div>
      </section>
      <section className="my-10 md:hidden">
        <div>presenting</div>
        <div className="text-3xl mt-2 font-semibold">
          Best Pre-owned Cars from Trusted Hands
        </div>
        <div className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspicia
        </div>
        <div className="flex">
          <div className="m-2 p-3 bg-sortofprimary font-semibold text-white rounded-lg px-5 ml-0">
            contact us
          </div>
          <div className="m-2 p-3 bg-sortofprimary font-semibold rounded-lg px-5 bg-opacity-25 text-sortofprimary ">
            view cars
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/300"
            className="w-full my-2 rounded-xl"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
export default LandingSection;
