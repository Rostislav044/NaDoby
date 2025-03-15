


// "use client"; 
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import Login from "./Login";
// import { useLanguage } from "@/app/LanguageContext";
// import styles from "@/app/styles/Menu.styles.module.scss";

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
//   const loginRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   const handleToggleLogin = () => setIsLoginOpen(prev => !prev);
//   const handleCloseMenu = () => setIsMenuOpen(false);
//   const handleCloseLogin = () => setIsLoginOpen(false);

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       setIsLanguageMenuOpen(false);
//       setIsCurrencyMenuOpen(false);
//     }
//     if (loginRef.current && !loginRef.current.contains(event.target)) {
//       setIsLoginOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen || isLoginOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen, isLoginOpen]);

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
//           <li onClick={handleToggleLogin}>
//             {translation.login}
//           </li>
//           {isLoginOpen && <Login onClose={handleCloseLogin} ref={loginRef} />}

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

//         <div className={styles.listYourProperty}>
//           <Link href="/add-apartment">
//             {translation.listYourProperty}
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Menu;


// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import { useLanguage } from "@/app/LanguageContext";
// import { Drawer, List, ListItem, ListItemText, IconButton, Collapse, MenuItem, Typography, Box } from "@mui/material";
// import { Close, ArrowDropDown } from "@mui/icons-material";
// import CreateUser from "./CreateUser"; // Импортируем компонент CreateUser
// import styles from "@/app/styles/Menu.styles.module.scss";

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
//   const [isCreateUserOpen, setIsCreateUserOpen] = useState(false); // Состояние для компонента CreateUser
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();

//   const handleCloseMenu = () => setIsMenuOpen(false);
//   const handleCreateUserOpen = () => {
//     setIsCreateUserOpen(true); // Открываем компонент CreateUser
//     handleCloseMenu(); // Закрываем меню при открытии CreateUser
//   };
//   const handleCreateUserClose = () => setIsCreateUserOpen(false); // Закрываем компонент CreateUser

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

//   return (
//     <>
//       {/* Меню */}
//       <Drawer anchor="right" open={isMenuOpen} onClose={handleCloseMenu}>
//         <Box sx={{ width: 300 }} role="presentation" ref={menuRef}>
//           <Box className={styles.menuHeader}>
//             <Typography variant="h6" className={styles.name}>NaDoby.com.ua</Typography>
//             <IconButton onClick={handleCloseMenu}>
//               <Close />
//             </IconButton>
//           </Box>

//           <Typography variant="body1" sx={{ p: 2 }}>{translation.slogan}</Typography>

//           <List>
//             {/* Кнопка для открытия CreateUser */}
//             <ListItem button onClick={handleCreateUserOpen}>
//               <ListItemText primary={translation.login} />
//             </ListItem>

//             {/* Выбор языка */}
//             <ListItem button onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
//               <ListItemText primary={translation.language} />
//               <ArrowDropDown />
//             </ListItem>
//             <Collapse in={isLanguageMenuOpen}>
//               <List>
//                 <MenuItem onClick={() => onLanguageToggle("ua")}>UA</MenuItem>
//                 <MenuItem onClick={() => onLanguageToggle("ru")}>RU</MenuItem>
//               </List>
//             </Collapse>

//             {/* Выбор валюты */}
//             <ListItem button onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}>
//               <ListItemText primary={translation.currency} />
//               <ArrowDropDown />
//             </ListItem>
//             <Collapse in={isCurrencyMenuOpen}>
//               <List>
//                 <MenuItem>USD</MenuItem>
//                 <MenuItem>EUR</MenuItem>
//                 <MenuItem>UAH</MenuItem>
//               </List>
//             </Collapse>

//             {/* Остальные пункты меню */}
//             <ListItem button>
//               <ListItemText primary={translation.housingSearch} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.rentalConditions} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.faq} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.blog} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.contact} />
//             </ListItem>
//           </List>

//           {/* Ссылка для добавления жилья */}
//           <Box sx={{ p: 2 }}>
//             <Link href="/add-apartment">
//               <Typography variant="body2" color="primary">
//                 {translation.listYourProperty}
//               </Typography>
//             </Link>
//           </Box>
//         </Box>
//       </Drawer>

//       {/* Компонент CreateUser */}
//       <CreateUser open={isCreateUserOpen} onClose={handleCreateUserClose} />
//     </>
//   );
// };

// export default Menu;


// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Link from 'next/link';
// import { useLanguage } from "@/app/LanguageContext";
// import { Drawer, List, ListItem, ListItemText, IconButton, Collapse, MenuItem, Typography, Box } from "@mui/material";
// import { Close, ArrowDropDown } from "@mui/icons-material";
// import CreateUser from "./CreateUser"; // Импортируем компонент CreateUser
// import styles from "@/app/styles/Menu.styles.module.scss";

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
//   const [isCreateUserOpen, setIsCreateUserOpen] = useState(false); // Состояние для компонента CreateUser
//   const menuRef = useRef(null);
//   const { currentLanguage, onLanguageToggle } = useLanguage();

//   const handleCloseMenu = () => setIsMenuOpen(false);
//   const handleCreateUserOpen = () => {
//     setIsCreateUserOpen(true); // Открываем компонент CreateUser
//     handleCloseMenu(); // Закрываем меню при открытии CreateUser
//   };
//   const handleCreateUserClose = () => setIsCreateUserOpen(false); // Закрываем компонент CreateUser

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

//   return (
//     <>
//       {/* Меню */}
//       <Drawer anchor="right" open={isMenuOpen} onClose={handleCloseMenu}>
//         <Box sx={{ width: 300 }} role="presentation" ref={menuRef}>
//           <Box className={styles.menuHeader}>
//             <Typography variant="h6" className={styles.name}>NaDoby.com.ua</Typography>
//             <IconButton onClick={handleCloseMenu}>
//               <Close />
//             </IconButton>
//           </Box>

//           <Typography variant="body1" sx={{ p: 2 }}>{translation.slogan}</Typography>

//           <List>
//             {/* Кнопка для открытия CreateUser */}
//             <ListItem button onClick={handleCreateUserOpen}>
//               <ListItemText primary={translation.login} />
//             </ListItem>

//             {/* Выбор языка */}
//             <ListItem button onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
//               <ListItemText primary={translation.language} />
//               <ArrowDropDown />
//             </ListItem>
//             <Collapse in={isLanguageMenuOpen}>
//               <List>
//                 <MenuItem onClick={() => onLanguageToggle("ua")}>UA</MenuItem>
//                 <MenuItem onClick={() => onLanguageToggle("ru")}>RU</MenuItem>
//               </List>
//             </Collapse>

//             {/* Выбор валюты */}
//             <ListItem button onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}>
//               <ListItemText primary={translation.currency} />
//               <ArrowDropDown />
//             </ListItem>
//             <Collapse in={isCurrencyMenuOpen}>
//               <List>
//                 <MenuItem>USD</MenuItem>
//                 <MenuItem>EUR</MenuItem>
//                 <MenuItem>UAH</MenuItem>
//               </List>
//             </Collapse>

//             {/* Остальные пункты меню */}
//             <ListItem button>
//               <ListItemText primary={translation.housingSearch} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.rentalConditions} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.faq} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.blog} />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary={translation.contact} />
//             </ListItem>
//           </List>

//           {/* Ссылка для добавления жилья */}
//           <Box sx={{ p: 2 }}>
//             <Link href="/add-apartment">
//               <Typography variant="body2" color="primary">
//                 {translation.listYourProperty}
//               </Typography>
//             </Link>
//           </Box>
//         </Box>
//       </Drawer>

//       {/* Компонент CreateUser */}
//       {isCreateUserOpen && <CreateUser onClose={handleCreateUserClose} />}
//     </>
//   );
// };

// export default Menu;


"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useLanguage } from "@/app/LanguageContext";
import { Drawer, List, ListItem, ListItemText, IconButton, Collapse, MenuItem, Typography, Box, Modal } from "@mui/material";
import { Close, ArrowDropDown } from "@mui/icons-material";
import CreateUser from "./CreateUser"; // Импортируем компонент CreateUser
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
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false); // Состояние для компонента CreateUser
  const menuRef = useRef(null);
  const { currentLanguage, onLanguageToggle } = useLanguage();

  const handleCloseMenu = () => setIsMenuOpen(false);
  const handleCreateUserOpen = () => {
    setIsCreateUserOpen(true); // Открываем компонент CreateUser
    handleCloseMenu(); // Закрываем меню при открытии CreateUser
  };
  const handleCreateUserClose = () => setIsCreateUserOpen(false); // Закрываем компонент CreateUser

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsLanguageMenuOpen(false);
      setIsCurrencyMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const translation = translations[currentLanguage];

  return (
    <>
      {/* Меню */}
      <Drawer anchor="right" open={isMenuOpen} onClose={handleCloseMenu}>
        <Box sx={{ width: 300 }} role="presentation" ref={menuRef}>
          <Box className={styles.menuHeader}>
            <Typography variant="h6" className={styles.name}>NaDoby.com.ua</Typography>
            <IconButton onClick={handleCloseMenu}>
              <Close />
            </IconButton>
          </Box>

          <Typography variant="body1" sx={{ p: 2 }}>{translation.slogan}</Typography>

          <List>
            {/* Кнопка для открытия CreateUser */}
            <ListItem button onClick={handleCreateUserOpen}>
              <ListItemText primary={translation.login} />
            </ListItem>

            {/* Выбор языка */}
            <ListItem button onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
              <ListItemText primary={translation.language} />
              <ArrowDropDown />
            </ListItem>
            <Collapse in={isLanguageMenuOpen}>
              <List>
                <MenuItem onClick={() => onLanguageToggle("ua")}>UA</MenuItem>
                <MenuItem onClick={() => onLanguageToggle("ru")}>RU</MenuItem>
              </List>
            </Collapse>

            {/* Выбор валюты */}
            <ListItem button onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}>
              <ListItemText primary={translation.currency} />
              <ArrowDropDown />
            </ListItem>
            <Collapse in={isCurrencyMenuOpen}>
              <List>
                <MenuItem>USD</MenuItem>
                <MenuItem>EUR</MenuItem>
                <MenuItem>UAH</MenuItem>
              </List>
            </Collapse>

            {/* Остальные пункты меню */}
            <ListItem button>
              <ListItemText primary={translation.housingSearch} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={translation.rentalConditions} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={translation.faq} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={translation.blog} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={translation.contact} />
            </ListItem>
          </List>

          {/* Ссылка для добавления жилья */}
          <Box sx={{ p: 2 }}>
            <Link href="/add-apartment">
              <Typography variant="body2" color="primary">
                {translation.listYourProperty}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Drawer>

      {/* Модальное окно для CreateUser с затемнённым фоном */}
      <Modal
        open={isCreateUserOpen}
        onClose={handleCreateUserClose}
        aria-labelledby="create-user-modal"
        aria-describedby="create-user-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <CreateUser onClose={handleCreateUserClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Menu;