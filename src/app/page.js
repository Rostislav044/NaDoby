

// import Image from "next/image";
// import burgerMenu from '../../public/burger.svg';
// import styles from '@/app/styles/header.styles.module.scss';
// export default function Home() {
// return (
//   <>
//   <header >
//     <div className={styles.headerContainer}>
//     <p className={styles.homLogo}>
//       NaDoby.com.ua
//     </p>
//     <Image
//     src={burgerMenu}
//     />
//     </div>
//     <p className={styles.homSlogan}>
// Подобова аренда в Україні від власників.
//     </p>
    
//   </header>
//   </>
// )
// }


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import burgerMenu from "../../public/burger.svg";
// import Menu from '@/app/components/Menu';
// import styles from "@/app/styles/header.styles.module.scss";

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <header>
//         <div className={styles.headerContainer}>
//           <p className={styles.homLogo}>NaDoby.com.ua</p>
//           <Image
//             src={burgerMenu}
//             alt="Меню"
//             className={styles.burgerIcon}
//             onClick={toggleMenu}
//           />
//         </div>
//         <p className={styles.homSlogan}>
//           Подобова аренда в Україні від власників.
//         </p>
//       </header>
//       {isMenuOpen && <Menu />} {/* Используем компонент Menu */}
//     </>
//   );
// }


"use client";

import React from "react";
import Header from "@/app/components/Header"; 
import Search from "./components/Search";


export default function Home() {
  return (
    <>
      <Header /> 
      <Search/>
    </>
  );
}
