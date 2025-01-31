



// "use client"; // Указание клиентского компонента

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import Login from "./Login";
// import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка
// import styles from "@/app/styles/Menu.styles.module.scss"; // Стили для меню

// // Добавляем переводы для текста
// const translations = {
//   ua: {
//     slogan: "Оренда житла по всій Україні без посередників.",
//     language: "Мова",
//     currency: "Валюта",
//     login: "Увійти/Зареєструватися",
//     housingSearch: "Пошук житла",
//     rentalConditions: "Умови оренди",
//     faq: "Часті питання",
//     blog: "Блог",
//     contact: "Зв'язатися з нами",
//     listYourProperty: "Здати своє помешкання.",
//   },
//   ru: {
//     slogan: "Аренда жилья по всей Украине без посредников.",
//     language: "Язык",
//     currency: "Валюта",
//     login: "Войти/Зарегистрироваться",
//     housingSearch: "Поиск жилья",
//     rentalConditions: "Условия аренды",
//     faq: "Часто задаваемые вопросы",
//     blog: "Блог",
//     contact: "Связаться с нами",
//     listYourProperty: "Сдать свое жилье.",
//   },
// };

// const Menu = () => {
  
  
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false); // Состояние для меню валют
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();
//   const [isLoginOpen, setIsLoginOpen] = useState(false); 
//   const toggleLogin = () => setIsLoginOpen(prev => !prev); 
//   // const toggleLogin = () => setIsLoginOpen(prev => !prev); 
//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       setIsLanguageMenuOpen(false);
//       setIsCurrencyMenuOpen(false); // Закрываем меню валют при клике снаружи
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const translation = translations[currentLanguage];

//   // Добавляем проверку на видимость меню
//   if (!isMenuOpen) return null;

//   return (
//     <div className={styles.menuOverlay}>
//       <nav className={styles.menu} ref={menuRef}>
//         <div className={styles.menuHeader}>
//           <h3 className={styles.name}>NaDoby.com.ua</h3>
//           <button className={styles.closeButton} onClick={handleCloseMenu}>
//             <Image src="/close.svg" alt="Закрыть меню" width={16} height={16} />
//           </button>
//         </div>

//         <p>{translation.slogan}</p>

//         <ul>
//         <li onClick={toggleLogin}>
//   {translation.login}
// </li>

//           <li className={styles.languageSelector}>
//             {translation.language}
//             <div
//               className={styles.langToggle}
//               onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isLanguageMenuOpen && (
//               <div className={styles.languageMenu}>
//                 <span onClick={() => onLanguageToggle("ua")}>UA</span>
//                 <span onClick={() => onLanguageToggle("ru")}>RU</span>
//               </div>
//             )}
//           </li>
//           <li className={styles.currencySelector}>
//             {translation.currency}
//             <div
//               className={styles.currencyToggle}
//               onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isCurrencyMenuOpen && (
//               <div className={styles.currencyMenu}>
//                 <div className={styles.currencyItem}>
//                   <span>USD</span>
//                   <span>EUR</span>
//                   <span>UAH</span>
//                 </div>
//               </div>
//             )}
//           </li>
//           {/* <li>{translation.login}  onClick={toggleLogin} </li> */}
//           <li>{translation.housingSearch}</li>
//           <li>{translation.rentalConditions}</li>
//           <li>{translation.faq}</li>
//           <li>{translation.blog}</li>
//           <li>{translation.contact}</li>
//         </ul>

//         {/* <div className={styles.menuDiv}>{translation.listYourProperty}</div> */}

//         <li>
//     <Link href="/add-apartment">
//       {translation.listYourProperty}
//     </Link>
//   </li>
//       </nav>
      
      
//     </div>
//   );
// };

// export default Menu;



// "use client"; // Указание клиентского компонента

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import Login from "./Login";
// import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка
// import styles from "@/app/styles/Menu.styles.module.scss"; // Стили для меню

// // Добавляем переводы для текста
// const translations = {
//   ua: {
//     slogan: "Оренда житла по всій Україні без посередників.",
//     language: "Мова",
//     currency: "Валюта",
//     login: "Увійти/Зареєструватися",
//     housingSearch: "Пошук житла",
//     rentalConditions: "Умови оренди",
//     faq: "Часті питання",
//     blog: "Блог",
//     contact: "Зв'язатися з нами",
//     listYourProperty: "Здати своє помешкання.",
//   },
//   ru: {
//     slogan: "Аренда жилья по всей Украине без посредников.",
//     language: "Язык",
//     currency: "Валюта",
//     login: "Войти/Зарегистрироваться",
//     housingSearch: "Поиск жилья",
//     rentalConditions: "Условия аренды",
//     faq: "Часто задаваемые вопросы",
//     blog: "Блог",
//     contact: "Связаться с нами",
//     listYourProperty: "Сдать свое жилье.",
//   },
// };

// const Menu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false); // Состояние для меню валют
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();
//   const [isLoginOpen, setIsLoginOpen] = useState(false); 
//   const toggleLogin = () => setIsLoginOpen(prev => !prev); 
//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       setIsLanguageMenuOpen(false);
//       setIsCurrencyMenuOpen(false); // Закрываем меню валют при клике снаружи
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const translation = translations[currentLanguage];

//   if (!isMenuOpen) return null;

//   return (
//     <div className={styles.menuOverlay}>
//       <nav className={styles.menu} ref={menuRef}>
//         <div className={styles.menuHeader}>
//           <h3 className={styles.name}>NaDoby.com.ua</h3>
//           <button className={styles.closeButton} onClick={handleCloseMenu}>
//             <Image src="/close.svg" alt="Закрыть меню" width={16} height={16} />
//           </button>
//         </div>

//         <p>{translation.slogan}</p>

//         <ul>
//           <li onClick={toggleLogin}>
//             {translation.login}
//           </li>
//           {isLoginOpen && <Login />} {/* Рендеринг компонента Login */}

//           <li className={styles.languageSelector}>
//             {translation.language}
//             <div
//               className={styles.langToggle}
//               onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isLanguageMenuOpen && (
//               <div className={styles.languageMenu}>
//                 <span onClick={() => onLanguageToggle("ua")}>UA</span>
//                 <span onClick={() => onLanguageToggle("ru")}>RU</span>
//               </div>
//             )}
//           </li>
//           <li className={styles.currencySelector}>
//             {translation.currency}
//             <div
//               className={styles.currencyToggle}
//               onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isCurrencyMenuOpen && (
//               <div className={styles.currencyMenu}>
//                 <div className={styles.currencyItem}>
//                   <span>USD</span>
//                   <span>EUR</span>
//                   <span>UAH</span>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li>{translation.housingSearch}</li>
//           <li>{translation.rentalConditions}</li>
//           <li>{translation.faq}</li>
//           <li>{translation.blog}</li>
//           <li>{translation.contact}</li>
//         </ul>

//         <li>
//           <Link href="/add-apartment">
//             {translation.listYourProperty}
//           </Link>
//         </li>
//       </nav>
//     </div>
//   );
// };

// export default Menu;





// "use client"; // Указание клиентского компонента

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import Login from "./Login";
// import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка
// import styles from "@/app/styles/Menu.styles.module.scss"; // Стили для меню

// // Добавляем переводы для текста
// const translations = {
//   ua: {
//     slogan: "Оренда житла по всій Україні без посередників.",
//     language: "Мова",
//     currency: "Валюта",
//     login: "Увійти/Зареєструватися",
//     housingSearch: "Пошук житла",
//     rentalConditions: "Умови оренди",
//     faq: "Часті питання",
//     blog: "Блог",
//     contact: "Зв'язатися з нами",
//     listYourProperty: "Здати своє помешкання.",
//   },
//   ru: {
//     slogan: "Аренда жилья по всей Украине без посредников.",
//     language: "Язык",
//     currency: "Валюта",
//     login: "Войти/Зарегистрироваться",
//     housingSearch: "Поиск жилья",
//     rentalConditions: "Условия аренды",
//     faq: "Часто задаваемые вопросы",
//     blog: "Блог",
//     contact: "Связаться с нами",
//     listYourProperty: "Сдать свое жилье.",
//   },
// };


// const Menu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
  
//   const toggleLogin = () => setIsLoginOpen(prev => !prev);
//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };
//   const handleCloseLogin = () => {
//     setIsLoginOpen(false); // Закрыть компонент Login
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       setIsLanguageMenuOpen(false);
//       setIsCurrencyMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const translation = translations[currentLanguage];

//   if (!isMenuOpen) return null;

//   return (
//     <div className={styles.menuOverlay}>
//       <nav className={styles.menu} ref={menuRef}>
//         <div className={styles.menuHeader}>
//           <h3 className={styles.name}>NaDoby.com.ua</h3>
//           <button className={styles.closeButton} onClick={handleCloseMenu}>
//             <Image src="/close.svg" alt="Закрыть меню" width={16} height={16} />
//           </button>
//         </div>

//         <p>{translation.slogan}</p>

//         <ul>
//           <li onClick={toggleLogin}>
//             {translation.login}
//           </li>
//           {isLoginOpen && <Login onClose={handleCloseLogin} />} {/* Передаем функцию handleCloseLogin */}

//           <li className={styles.languageSelector}>
//             {translation.language}
//             <div
//               className={styles.langToggle}
//               onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isLanguageMenuOpen && (
//               <div className={styles.languageMenu}>
//                 <span onClick={() => onLanguageToggle("ua")}>UA</span>
//                 <span onClick={() => onLanguageToggle("ru")}>RU</span>
//               </div>
//             )}
//           </li>
//           <li className={styles.currencySelector}>
//             {translation.currency}
//             <div
//               className={styles.currencyToggle}
//               onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрелка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isCurrencyMenuOpen && (
//               <div className={styles.currencyMenu}>
//                 <div className={styles.currencyItem}>
//                   <span>USD</span>
//                   <span>EUR</span>
//                   <span>UAH</span>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li>{translation.housingSearch}</li>
//           <li>{translation.rentalConditions}</li>
//           <li>{translation.faq}</li>
//           <li>{translation.blog}</li>
//           <li>{translation.contact}</li>
//         </ul>

//         <li>
//           <Link href="/add-apartment">
//             {translation.listYourProperty}
//           </Link>
//         </li>
//       </nav>
//     </div>
//   );
// };

// export default Menu;



// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import Login from "./Login";
// import { useLanguage } from "@/app/LanguageContext";
// import styles from "@/app/styles/Menu.styles.module.scss";

// // Переводы для текста
// const translations = {
//   ua: {
//     slogan: "Оренда житла по всій Україні без посередників.",
//     language: "Мова",
//     currency: "Валюта",
//     login: "Увійти/Зареєструватися",
//     housingSearch: "Пошук житла",
//     rentalConditions: "Умови оренди",
//     faq: "Часті питання",
//     blog: "Блог",
//     contact: "Зв'язатися з нами",
//     listYourProperty: "Здати своє помешкання.",
//   },
//   ru: {
//     slogan: "Аренда жилья по всей Украине без посредников.",
//     language: "Язык",
//     currency: "Валюта",
//     login: "Войти/Зарегистрироваться",
//     housingSearch: "Поиск жилья",
//     rentalConditions: "Условия аренды",
//     faq: "Часто задаваемые вопросы",
//     blog: "Блог",
//     contact: "Связаться с нами",
//     listYourProperty: "Сдать свое жилье.",
//   },
// };

// const Menu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
//   const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   const toggleLogin = () => setIsLoginOpen(prev => !prev);
//   const handleCloseMenu = () => setIsMenuOpen(false);
//   const handleCloseLogin = () => setIsLoginOpen(false);

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       setIsLanguageMenuOpen(false);
//       setIsCurrencyMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const translation = translations[currentLanguage];

//   if (!isMenuOpen) return null;

//   return (
//     <div className={styles.menuOverlay}>
//       <nav className={styles.menu} ref={menuRef}>
//         <div className={styles.menuHeader}>
//           <h3 className={styles.name}>NaDoby.com.ua</h3>
//           <button className={styles.closeButton} onClick={handleCloseMenu}>
//             <Image src="/close.svg" alt="Закрити меню" width={16} height={16} />
//           </button>
//         </div>

//         <p>{translation.slogan}</p>

//         <ul>
//           <li onClick={toggleLogin}>
//             {translation.login}
//           </li>
//           {isLoginOpen && <Login onClose={handleCloseLogin} />} {/* Передаємо onClose проп */}

//           <li className={styles.languageSelector}>
//             {translation.language}
//             <div
//               className={styles.langToggle}
//               onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрілка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isLanguageMenuOpen && (
//               <div className={styles.languageMenu}>
//                 <span onClick={() => onLanguageToggle("ua")}>UA</span>
//                 <span onClick={() => onLanguageToggle("ru")}>RU</span>
//               </div>
//             )}
//           </li>
//           <li className={styles.currencySelector}>
//             {translation.currency}
//             <div
//               className={styles.currencyToggle}
//               onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
//             >
//               <Image
//                 src="/angle.svg"
//                 alt="стрілка"
//                 width={16}
//                 height={16}
//                 className={styles.arrow}
//               />
//             </div>
//             {isCurrencyMenuOpen && (
//               <div className={styles.currencyMenu}>
//                 <div className={styles.currencyItem}>
//                   <span>USD</span>
//                   <span>EUR</span>
//                   <span>UAH</span>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li>{translation.housingSearch}</li>
//           <li>{translation.rentalConditions}</li>
//           <li>{translation.faq}</li>
//           <li>{translation.blog}</li>
//           <li>{translation.contact}</li>
//         </ul>

//         <li>
//           <Link href="/add-apartment">
//             {translation.listYourProperty}
//           </Link>
//         </li>
//       </nav>
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Login from "./Login";
import { useLanguage } from "@/app/LanguageContext";
import styles from "@/app/styles/Menu.styles.module.scss";

const translations = {
  ua: {
    slogan: "Оренда житла по всій Україні без посередників.",
    language: "Мова",
    currency: "Валюта",
    login: "Увійти/Зареєструватися",
    housingSearch: "Пошук житла",
    rentalConditions: "Умови оренди",
    faq: "Часті питання",
    blog: "Блог",
    contact: "Зв'язатися з нами",
    listYourProperty: "Здати своє помешкання.",
  },
  ru: {
    slogan: "Аренда жилья по всей Украине без посредников.",
    language: "Язык",
    currency: "Валюта",
    login: "Войти/Зарегистрироваться",
    housingSearch: "Поиск жилья",
    rentalConditions: "Условия аренды",
    faq: "Часто задаваемые вопросы",
    blog: "Блог",
    contact: "Связаться с нами",
    listYourProperty: "Сдать свое жилье.",
  },
};

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const loginRef = useRef(null);
  const { currentLanguage, onLanguageToggle } = useLanguage();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleToggleLogin = () => setIsLoginOpen(prev => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsLanguageMenuOpen(false);
      setIsCurrencyMenuOpen(false);
    }
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      setIsLoginOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen || isLoginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isLoginOpen]);

  const translation = translations[currentLanguage];

  if (!isMenuOpen) return null;

  return (
    <div className={styles.menuOverlay}>
      <nav className={styles.menu} ref={menuRef}>
        <div className={styles.menuHeader}>
          <h3 className={styles.name}>NaDoby.com.ua</h3>
          <button className={styles.closeButton} onClick={handleCloseMenu}>
            <Image src="/close.svg" alt="Закрыть меню" width={16} height={16} />
          </button>
        </div>

        <p>{translation.slogan}</p>

        <ul>
          <li onClick={handleToggleLogin}>
            {translation.login}
          </li>
          {isLoginOpen && <Login onClose={handleCloseLogin} ref={loginRef} />}

          <li className={styles.languageSelector}>
            {translation.language}
            <div
              className={styles.langToggle}
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <Image
                src="/angle.svg"
                alt="стрелка"
                width={16}
                height={16}
                className={styles.arrow}
              />
            </div>
            {isLanguageMenuOpen && (
              <div className={styles.languageMenu}>
                <span onClick={() => onLanguageToggle("ua")}>UA</span>
                <span onClick={() => onLanguageToggle("ru")}>RU</span>
              </div>
            )}
          </li>
          <li className={styles.currencySelector}>
            {translation.currency}
            <div
              className={styles.currencyToggle}
              onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
            >
              <Image
                src="/angle.svg"
                alt="стрелка"
                width={16}
                height={16}
                className={styles.arrow}
              />
            </div>
            {isCurrencyMenuOpen && (
              <div className={styles.currencyMenu}>
                <div className={styles.currencyItem}>
                  <span>USD</span>
                  <span>EUR</span>
                  <span>UAH</span>
                </div>
              </div>
            )}
          </li>
          <li>{translation.housingSearch}</li>
          <li>{translation.rentalConditions}</li>
          <li>{translation.faq}</li>
          <li>{translation.blog}</li>
          <li>{translation.contact}</li>
        </ul>

        <div className={styles.listYourProperty}>
          <Link href="/add-apartment">
            {translation.listYourProperty}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
