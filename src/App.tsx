function App() {
  return (
    <>
      <div className=" parent relative font-Marcellus ">
        <section>
          <div>
            <header className="z-50 absolute w-full flex flex-col items-center justify-center py-5 pt-16 gap-5  ">
              <span className=" font-Silkscreen text-6xl text-white">
                some logo here
              </span>
              <ul className="flex gap-8 nav text-2xl text-gray-100">
                <li>
                  <a className=" "> Home </a>
                </li>
                <li>
                  <a> About us </a>
                </li>
                <li>
                  <a> Gallery </a>
                </li>
                <li>
                  <a> Albums </a>
                </li>
                <li>
                  <a> Contacts </a>
                </li>
              </ul>
            </header>
          </div>
          {/* Background wrapper */}
          <div className="relative h-screen bg-no-repeat bg-cover bg-center">
            {/* Dark overlay */}
            <div className="absolute inset-0 z-20 bg-black opacity-35"></div>

            {/* Background image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url(/man-7795464_1920.jpg)" }}
            ></div>
          </div>
        </section>
        <section className="h-screen custom-gradient"></section>
      </div>
    </>
  );
}

export default App;
