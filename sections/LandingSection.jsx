function LandingSection(props) {
  return (
    <section className="flex w-full justify-center items-center h-sortofscreen">
      <section className="max-w-screen-2xl grid grid-cols-2 place-items-center place-content-center p-12 ">
        <div>
          <div className="text-6xl font-semibold w-4/5">
            Best Pre-owned Cars from Trusted Hands
          </div>
          <div className="my-10 w-4/5 text-2xl">
            {" "}
            consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
          </div>
          <div className="flex items-start ">
            <div className="m-2 ml-0 p-3 px-12 rounded-xl font-bold text-white bg-primary">
              Contact us
            </div>
            <div className="m-2 p-3 px-12 rounded-xl font-bold text-white bg-sortofprimary">
              View Cars
            </div>
          </div>
        </div>
        <div className="  ">
          <img
            src="https://via.placeholder.com/500"
            className="rounded-2xl"
            alt=""
          />
        </div>
      </section>
    </section>
  );
}
export default LandingSection;
