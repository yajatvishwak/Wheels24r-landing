function AboutUsSection(props) {
  return (
    <section className="flex w-full flex-col justify-center items-center ">
      <section className="max-w-screen-2xl grid  grid-cols-2  p-12   mb-10 ">
        <div className="text-6xl font-semibold w-3/4  ">
          We are the best company ever on this planet you mom
        </div>
        <div>
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
      <div className=" flex w-full items-stretch">
        <img src="https://via.placeholder.com/300" className="flex-1" alt="" />
        <img
          src="https://via.placeholder.com/300"
          className="flex-1 mx-1"
          alt=""
        />
        <img src="https://via.placeholder.com/300" className="flex-1" alt="" />
      </div>
    </section>
  );
}
export default AboutUsSection;
