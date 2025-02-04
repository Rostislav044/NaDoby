import React from "react";
import Link from "next/link";
import styles from "@/app/styles/Menu.styles.module.scss";

const translations = {
  ua: {
    profile: "Профіль",
    myListings: "Мої оголошення",
    messages: "Повідомлення",
    favorites: "Обране",
    logout: "Вийти",
  },
  ru: {
    profile: "Профиль",
    myListings: "Мои объявления",
    messages: "Сообщения",
    favorites: "Избранное",
    logout: "Выйти",
  },
};

const UserMenu = ({ currentLanguage, onLogout }) => {
  const translation = translations[currentLanguage];

  return (
    <ul className={styles.userMenu}>
      <li>
        <Link href="/profile">{translation.profile}</Link>
      </li>
      <li>
        <Link href="/my-listings">{translation.myListings}</Link>
      </li>
      <li>
        <Link href="/messages">{translation.messages}</Link>
      </li>
      <li>
        <Link href="/favorites">{translation.favorites}</Link>
      </li>
      <li onClick={onLogout} className={styles.logout}>
        {translation.logout}
      </li>
    </ul>
  );
};

export default UserMenu;
