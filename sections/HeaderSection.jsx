import { useState } from "react";

function HeaderSection(props) {
  const [open, setopen] = useState(false);
  return (
    <header className="p-6 border">
      <div className="flex items-center">
        <div className="text-xl font-semibold">Wheels24r</div>
        <div className=" items-center w-full hidden md:flex">
          <div className="mx-5">| </div>
          <nav className=" flex w-full">
            <div className="p-2">
              <a href="">home</a>
            </div>
            <div className="p-2">
              <a href="">blah</a>
            </div>
            <div className="p-2">
              <a href="">blash </a>
            </div>
            <div className="p-2 ml-auto">
              <a href="">blash </a>
            </div>
          </nav>
        </div>
        <div className="ml-auto md:hidden" onClick={() => setopen(!open)}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      <nav
        className={
          (open ? "block" : "hidden") +
          " bg-sortofprimary p-3 text-white rounded-xl mt-4"
        }
      >
        <div className="text-xl font-semibold ">Navigation</div>
        <div className="p-2">
          <a href="">home</a>
        </div>
        <div className="p-2">
          <a href="">blah</a>
        </div>
        <div className="p-2">
          <a href="">blash </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderSection;
