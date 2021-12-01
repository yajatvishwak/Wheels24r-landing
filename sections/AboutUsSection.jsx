function AboutUsSection(props) {
  return (
    <section className="flex w-full flex-col justify-center items-center ">
      <section className="max-w-screen-2xl grid  md:grid-cols-2 mb-10">
        <div className="text-3xl md:text-6xl md:w-3/4 md:mt-10 font-semibold">
          We are the best company ever on this planet you mom
        </div>
        <div className="mt-10">
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur maxime illo eum hic deserunt commodi, cumque expedita
            animi aperiam impedit veniam dolorum aut aspernatur, nam dolores
            perferendis totam assumenda ipsa! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Soluta, dicta nesciunt! Numquam
            ducimus dolorum qui quia natus ea distinctio deleniti excepturi
            maxime culpa cum, delectus eveniet autem voluptatum voluptatem nam!
          </div>
          <br />
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur maxime illo eum hic deserunt commodi, cumque expedita
            animi aperiam impedit veniam dolorum aut aspernatur, nam dolores
            perferendis totam assumenda ipsa! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Soluta, dicta nesciunt! Numquam
            ducimus dolorum qui quia natus ea distinctio deleniti excepturi
            maxime culpa cum, delectus eveniet autem voluptatum voluptatem nam!
          </div>
        </div>
      </section>
      <div className=" flex w-full flex-wrap items-stretch">
        <img
          src="https://via.placeholder.com/300"
          className="flex-1 m-2"
          alt=""
        />
        <img
          src="https://via.placeholder.com/300"
          className="flex-1 m-2"
          alt=""
        />
        <img
          src="https://via.placeholder.com/300"
          className="flex-1 m-2"
          alt=""
        />
      </div>
    </section>
  );
}
export default AboutUsSection;
