


"use client"; // Указание клиентского компонента

import React, { useState } from "react";
import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка
import Image from "next/image";
import Login from "./Login";
import Menu from "@/app/components/Menu"; // Используем уже существующий Menu
import styles from "@/app/styles/Header.styles.module.scss";

// Добавляем переводы для текста
const translations = {
  ua: "Оренда житла по всій Україні без посередників.",
  ru: "Аренда жилья по всей Украине без посредников.",
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Состояние для компонента Login
  const { currentLanguage } = useLanguage(); // Извлекаем текущий язык из контекста

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleLogin = () => setIsLoginOpen(prev => !prev); // Функция для переключения состояния Login

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <p className={styles.homLogo}>NaDoby.com.ua</p>
          
          <div className={styles.headerDiv}>
            <Image
              src="/avtoriz.svg"
              alt="авторизация"
              width={30}
              height={30}
              onClick={toggleLogin} // Добавляем обработчик клика для авторизации
            />
            <Image
              src="/burger.svg"
              alt="Меню"
              className={styles.burgerIcon}
              onClick={toggleMenu}
              width={24}
              height={24}
            />
          </div>
        </div>
        
        {/* Отображаем текст в зависимости от текущего языка */}
        <p className={styles.homSlogan}>
          {translations[currentLanguage]} {/* Используем перевод в зависимости от языка */}
        </p>
      </header>
      
      {isMenuOpen && <Menu />} {/* Меню отображается, когда оно открыто */}
      {isLoginOpen && <Login onClose={toggleLogin} />} {/* Компонент Login отображается, когда он открыт */}
    </>
  );
}
