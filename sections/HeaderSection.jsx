function HeaderSection(props) {
  return (
    <div className="flex  m-12 mt-3 mb-0  items-center">
      <span className="text-3xl  font-bold">Wheels24R</span>
      <span className="mx-5">|</span>
      <nav className="flex">
        <a className="m-4 font-semibold" href="">
          {" "}
          Home
        </a>
        <a className="m-4 font-semibold" href="">
          {" "}
          Appointment
        </a>
        <a className="m-4 font-semibold" href="">
          {" "}
          Gallery
        </a>
      </nav>
      <div className="ml-auto p-3 px-12 rounded-xl font-bold text-white bg-primary">
        Contact us
      </div>
    </div>
  );
}

export default HeaderSection;
