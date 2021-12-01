function MeetTheTeamSection(params) {
  return (
    <section className="flex w-full justify-center items-center h-full rounded-xl bg-sortofprimary text-white mt-10">
      <section className="max-w-screen-2xl p-10  ">
        <div className="text-3xl md:text-5xl font-semibold">Meet the Team</div>
        <div className="text-lg mb-10 md:text-3xl ">
          the brains behind the process
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center ">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  );
}
function Card(params) {
  return (
    <div className="m-5 hover:bg-opacity-25 p-10 w-full rounded-xl border-opacity-25 border-black flex justify-center  flex-col items-center  ">
      <img
        src="https://via.placeholder.com/300"
        className="rounded-full"
        alt=""
      />
      <div className="mt-10 font-semibold text-3xl">Ravi</div>
      <div>this is post</div>
    </div>
  );
}

export default MeetTheTeamSection;
