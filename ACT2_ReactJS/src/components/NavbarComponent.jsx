// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const NavbarComponent = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <div className="font-montserrat">
//       <nav className="relative flex flex-wrap items-center justify-between py-3 bg-white mb-3 z-10 shadow">
//         <div className="container mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <a
//               className="text-2xl md:text-3xl font-bold leading-relaxed inline-block mr-4 px-2 py-2 whitespace-nowrap text-purple-700"
//               href="/"
//             >
//               GUNADARMA
//             </a>
//             <button
//               className="text-purple-700 cursor-pointer text-xl leading-none px-3 py-1 border 
//               border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <FaBars />
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center justify-between" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id="example-navbar-danger"
//           >
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-4 justify-center items-center">
//               <li className="nav-item mr-4">
//                 <a
//                   className="px-3 py-2 flex items-center text-md leading-snug text-purple-700 hover:opacity-75"
//                   href="/"
//                 >
//                   <span className="ml-2">Home</span>
//                 </a>
//               </li>
//               <li className="nav-item mr-4">
//                 <a
//                   className="px-3 py-2 flex items-center text-md leading-snug text-purple-700 hover:opacity-75"
//                   href="/data_mhs"
//                 >
//                   <span className="ml-2">Data Mahasiswa</span>
//                 </a>
//               </li>
//             </ul>
//             <div className="flex justify-end w-full lg:w-auto mt-2 lg:mt-0">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-md font-medium bg-purple-400 hover:bg-purple-700 
//                 text-white rounded-md focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-50 mr-4"
//               >
//                 INFORMATIKA
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavbarComponent;


import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[now.getDay()];
      const date = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const formattedDate = `${day}, ${date}-${month}-${year}`;
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setDateTime(`${formattedDate} ${formattedTime}`);
    };
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-montserrat">
      <nav className="relative flex flex-wrap items-center justify-between py-3 bg-white mb-3 z-10 shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl md:text-3xl font-bold leading-relaxed inline-block mr-4 px-2 py-2 whitespace-nowrap text-purple-700"
              href="/"
            >
              GUNADARMA
            </a>
            <button
              className="text-purple-700 cursor-pointer text-xl leading-none px-3 py-1 border 
              border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-between" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-4 justify-center items-center">
              <li className="nav-item mr-4">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug text-purple-700 hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item mr-4">
                <a
                  className="px-3 py-2 flex items-center text-md leading-snug text-purple-700 hover:opacity-75"
                  href="/data_mhs"
                >
                  <span className="ml-2">Data Mahasiswa</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-end w-full lg:w-auto mt-2 lg:mt-0">
              <button
                type="button"
                className="informatika-button"
              >
                INFORMATIKA
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="datetime text-md">
        {dateTime}
      </div>
    </div>
  );
};

export default NavbarComponent;
