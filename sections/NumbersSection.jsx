function NumbersSection() {
  return (
    <section className="flex w-full flex-col justify-center items-center mt-10 ">
      <section className="max-w-screen-2xl grid  md:grid-cols-2 mb-10">
        <div className="text-3xl flex flex-col md:col-start-2 md:ml-10 md:text-6xl md:w-3/4 md:mt-10 font-semibold">
          <div>Dont believe us, believe the numbers</div>
          <div className="text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptates reprehenderit illum totam corrupti voluptatum maiores.
            Illum minus fuga cum at iusto deserunt pariatur impedit! Soluta at
            optio molestiae voluptate.
          </div>
        </div>
        <div className=" flex w-full md:col-start-1 md:row-start-1 mt-10 flex-wrap items-stretch">
          <div className="flex flex-col justify-center rounded-xl items-center w-full h-48 m-2 bg-primary">
            <div className="text-6xl mb-3">89</div>
            <div>subtitle</div>
          </div>
          <div className="flex flex-col justify-center rounded-xl items-center w-full m-2 h-48 bg-primary">
            <div className="text-6xl mb-3">89</div>
            <div>subtitle</div>
          </div>
          <div className="flex flex-col justify-center rounded-xl items-center w-full m-2 h-48 bg-primary">
            <div className="text-6xl mb-3">89</div>
            <div>subtitle</div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default NumbersSection;
