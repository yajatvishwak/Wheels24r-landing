function TestimonialSection(params) {
  return (
    <section className="flex w-full justify-center items-center h-full">
      <section className="max-w-screen-2xl">
        <div className="text-3xl md:text-5xl font-semibold">
          What others have to say about us
        </div>
        <div className="text-lg md:text-2xl mb-10 md:mt-3 ">
          (spoiler, its good)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="flex justify-center items-center">view more</div>
        </div>
      </section>
    </section>
  );
}

function Card(params) {
  return (
    <div className="p-6 border rounded-xl m-2">
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        accusantium ipsa consequatur nemo nesciunt molestiae ut numquam ad,
        aliquam quisquam, recusandae quasi quibusdam, nulla totam quas dolorum?
        Expedita, libero fugiat.
      </div>

      <div className="flex mt-10">
        <img
          src="https://via.placeholder.com/50"
          className="rounded-full"
          alt=""
        />
        <div className="ml-5">
          <div className="font-bold">John Doe</div>
          <div className="font-">Ceo</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
