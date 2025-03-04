// import DiscoImg from "./assets/1736974913.jpg";
// import JazzImg from "./assets/1736974970.jpg";
// import FieldImg from "./assets/1737237783.jpg";

// function App() {
//   return (
//     <>
//       <div className=" parent relative font-Poppins ">
//         <section>
//           <div>
//             <header className="z-50 absolute w-full flex flex-col items-center justify-center py-5 pt-16 gap-5  ">
//               <span className=" font-Silkscreen text-6xl text-white">
//                 some logo here
//               </span>
//               <ul className="flex gap-8 nav text-2xl text-gray-100">
//                 <li>
//                   <a className=" "> Home </a>
//                 </li>
//                 <li>
//                   <a> About us </a>
//                 </li>
//                 <li>
//                   <a> Gallery </a>
//                 </li>
//                 <li>
//                   <a> Albums </a>
//                 </li>
//                 <li>
//                   <a> Contacts </a>
//                 </li>
//               </ul>
//             </header>
//           </div>
//           {/* Background wrapper */}
//           <div className="relative h-screen bg-no-repeat bg-cover bg-center">
//             {/* Dark overlay */}
//             <div className="absolute inset-0 z-20 bg-black opacity-35"></div>

//             {/* Background image */}
//             <div
//               className="absolute inset-0 bg-no-repeat bg-cover bg-center"
//               style={{ backgroundImage: "url(/man-7795464_1920.jpg)" }}
//             ></div>
//           </div>
//         </section>
//         <section className="h-screen custom-gradient">
//           <div className=" flex justify-center gap-15 bg-gray-300 p-16 ">
//             <div className="card">
//               <div className=" card-content group ">
//                 <img src={DiscoImg} className="card-img" alt="" />
//                 <div className="dark-filter bg-gradient"></div>
//                 <div className="">
//                   {/* <div className="inset-0 absolute group z-[999]"></div> */}
//                   <div className=" group-hover:translate-y-0 translate-y-[calc(100%-10rem)]   absolute inset-0   transition-all flex flex-col items-center justify-center   text-white bg-opacity-50">
//                     <h1 className="text-4xl">Card</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className=" card-content group ">
//                 <img src={DiscoImg} className="card-img" alt="" />
//                 <div className="dark-filter bg-gradient"></div>
//                 <div className="">
//                   {/* <div className="inset-0 absolute group z-[999]"></div> */}
//                   <div className=" group-hover:translate-y-0 translate-y-[calc(100%-10rem)]   absolute inset-0   transition-all flex flex-col items-center justify-center   text-white bg-opacity-50">
//                     <h1 className="text-4xl">Card</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className=" card-content group ">
//                 <img src={DiscoImg} className="card-img" alt="" />
//                 <div className="dark-filter bg-gradient"></div>
//                 <div className="">
//                   {/* <div className="inset-0 absolute group z-[999]"></div> */}
//                   <div className=" group-hover:translate-y-0 translate-y-[calc(100%-10rem)]   absolute inset-0   transition-all flex flex-col items-center justify-center   text-white bg-opacity-50">
//                     <h1 className="text-4xl">Card</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default App;
import Hero from "./components/hero";
import MusicSection from "./components/music-section";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import BackgroundParticles from "./components/background-particles";
import SvgElements from "./components/svg-elements";
import CursorGlow from "./components/cursor-glow";

function App() {
  return (
    <main className="min-h-screen  bg-gradient-to-b from-background to-background/90 text-foreground relative">
      <BackgroundParticles color="#FFC300" />
      <SvgElements />
      <CursorGlow color="rgba(255, 195, 0, 0.5)" opacity={0.3} size={40} />
      <div className="relative z-10 ">
        <Hero />
        <MusicSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
