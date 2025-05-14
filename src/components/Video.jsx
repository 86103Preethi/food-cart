// import React, { useState } from "react";
// import ArrowBackIos from "@mui/icons-material/ArrowBackIos"; 
// import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
// import bread from '../assets/Videos/bread.mp4';
// import cookie from '../assets/Videos/cookie.mp4';
// import patti from '../assets/Videos/patti.mp4';

// const Video = ({ images = [], title = [], isOpen }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [videos] = useState([
//     { id: 1, player: bread, title: "Bread Video" },
//     { id: 2, player: cookie, title: "Cookie Video" },
//     { id: 3, player: patti, title: "Patti Video" },
//   ]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? videos.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className={`video-container ${isOpen ? "with-sidebar" : ""}`} >
//       <div className={`video-sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="relative w-full h-full flex flex-col items-center justify-center">
//           <div className="relative w-full">
//             {/* <img
//               src={images[currentIndex]}
//               alt={`Slide ${currentIndex}`}
//               className="w-full h-[300px] object-cover rounded-lg"
//             /> */}
//             <video
//               src={videos[currentIndex].player}
//               controls
//               autoPlay
//               loop
//               className="w-full h-[300px] object-cover rounded-lg"
//             />

//             <div className="absolute inset-0 flex items-center justify-between px-4">
//               <button
//                 onClick={prevSlide}
//                 className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
//               >
//                 <ArrowBackIos fontSize="small" /> {/* MUI Previous Icon */}
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
//               >
//                 <ArrowForwardIos fontSize="small" /> {/* MUI Next Icon */}
//               </button>
//             </div>
//           </div>

//           <div className="w-full mt-2 overflow-hidden whitespace-nowrap">
//             <p
//               className="text-md font-bold inline-block animate-marquee"
//               style={{ animationDuration: "5s" }}
//             >
//               {title[currentIndex]}
//             </p>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes marquee {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-marquee {
//             display: inline-block;
//             padding-left: 100%;
//             animation: marquee 10s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Video;