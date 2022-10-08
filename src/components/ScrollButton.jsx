// import React, { useState } from "react";
// import { FaAngleUp } from "react-icons/fa";

// const ScrollButton = () => {
//     const [setVisible] = useState(false)
//     const toggleVisible = () => {
//         const scrolled = document.documentElement.scrollTop;
//         if (scrolled > 300) {
//             setVisible(true)
//         }
//         else if (scrolled <= 0) {
//             setVisible(false)
//         }
//     };
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'auto'
//         });
//     };
//     window.addEventListener('scroll', toggleVisible);
//     return (
//         <button className='top-to-btm'>
//             <FaAngleUp className="icon-position icon-style"
//                 onClick={scrollToTop}
//             />
//         </button>


//     );
// }
// export default ScrollButton;
