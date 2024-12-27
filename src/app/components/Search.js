



// import React, { useState } from "react";
// import Autocomplete from "react-google-autocomplete"; // Импорт компонента
// import styles from "@/app/styles/Search.module.scss"; // Импорт стилей
// import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка

// const translations = {
//   ua: {
//     title: "Обирайте житло для своєї наступної подорожі",
//     subtitle: "Від готелів до приватних помешкань – знайдіть те, що потрібно.",
//     locationLabel: "Куди прямуєте?",
//     locationPlaceholder: "Введіть місцезнаходження",
//     guestsLabel: "Кількість гостей",
//     typeLabel: "Тип помешкання",
//     options: {
//       apart: "Квартири",
//       apartment: "Апартаменти",
//       hotel: "Готель",
//       hostel: "Хостел",
//       house: "Будинок",
//       recreationCenter: "База відпочинку",
//       sauna: "Cауна/Баня"
      
//     },
//     searchButton: "Пошук",
//     searchAlert: "Пошук виконано!",
//     errorMessages: {
//       location: "Будь ласка, виберіть місцезнаходження.",
//       guests: "Будь ласка, вкажіть кількість гостей.",
//       type: "Будь ласка, виберіть тип помешкання.",
//     },
//   },
//   ru: {
//     title: "Выбирайте жилье для следующего путешествия",
//     subtitle: "От отелей до частных домов – найдите то, что нужно.",
//     locationLabel: "Куда направляетесь?",
//     locationPlaceholder: "Введите местоположение",
//     guestsLabel: "Количество гостей",
//     typeLabel: "Тип жилья",
//     options: {
//       apart: "Квартиры",
//       apartment: "Апартаменты",
//       hotel: "Готель",
//       hostel: "Хостел",
//       house: "Дом",
//       recreationCenter: "База отдыза",
//       sauna: "Cауна/Баня"
      
//     },
//     searchButton: "Поиск",
//     searchAlert: "Поиск выполнен!",
//     errorMessages: { 
//       location: "Пожалуйста, выберите местоположение.",
//       guests: "Пожалуйста, укажите количество гостей.",
//       type: "Пожалуйста, выберите тип жилья.",
//     },
//   },
// };

// const Search = () => {
//   const [location, setLocation] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [type, setType] = useState("");
//   const [errors, setErrors] = useState({});
//   const { currentLanguage } = useLanguage();
//   const translation = translations[currentLanguage];
//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

//   const validateForm = () => {
//     const newErrors = {};
//     if (!location) newErrors.location = translation.errorMessages.location;
//     if (!guests || guests < 1) newErrors.guests = translation.errorMessages.guests;
//     if (!type) newErrors.type = translation.errorMessages.type;
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert(translation.searchAlert);
//     }
//   };

//   return (
//     <section className={styles.searchSection}>
//       <h1 className={styles.title}>{translation.title}</h1>
//       <p className={styles.subtitle}>{translation.subtitle}</p>

//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="location">{translation.locationLabel}</label>
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={(place) => setLocation(place?.formatted_address || "")}
//             options={{
//               types: ["(cities)"],
//               componentRestrictions: {
//                 country: currentLanguage === "ua" ? "ua" : "ru",
//               },
//             }}
//             placeholder={translation.locationPlaceholder}
//           />
//           {errors.location && <span className={styles.error}>{errors.location}</span>}
//         </div>



// <div className={styles.formGroup}>
//   <label htmlFor="guests">{translation.guestsLabel}</label>
//   <input
//     type="number"
//     id="guests"
//     placeholder="1" // Отображаем "1" как подсказку
//     value={guests > 1 ? guests : ""}
//     onChange={(e) => {
//       const value = Number(e.target.value);
//       setGuests(value >= 1 ? value : 1); // Обновляем состояние, не позволяя значения меньше 1
//     }}
//     onBlur={(e) => {
//       if (!e.target.value) setGuests(1); // Если пользователь оставляет поле пустым, устанавливаем 1
//     }}
//     min="1"
//   />
//   {errors.guests && <span className={styles.error}>{errors.guests}</span>}
// </div>



//         <div className={styles.formGroup } >
//           <label htmlFor="type">{translation.typeLabel}</label>
//           <select id="type" 
//           className={styles.selectGroup}
//           value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="">{translation.typeLabel}</option>
//             <option value="apart" className={styles.selectOptions}>{translation.options.apart}</option>
//             <option value="apartment" className={styles.selectOptions}>{translation.options.apartment}</option>
//             <option value="hotel" className={styles.selectOptions}>{translation.options.hotel}</option>
//             <option value="hostel" className={styles.selectOptions}>{translation.options.hostel}</option>
//             <option value="house" className={styles.selectOptions}>{translation.options.house}</option>
//             <option value="recreationCenter" className={styles.selectOptions}>{translation.options.recreationCenter}</option>
//             <option value="sauna" className={styles.selectOptions}>{translation.options.sauna}</option>
//           </select>
//           {errors.type && <span className={styles.error}>{errors.type}</span>}
//         </div>
        
        

//         <button type="submit" className={styles.searchButton}>
//           {translation.searchButton}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Search;
import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete"; // Импорт компонента
import styles from "@/app/styles/Search.module.scss"; // Импорт стилей
import { useLanguage } from "@/app/LanguageContext"; // Подключаем контекст для языка

const translations = {
  ua: {
    title: "Обирайте житло для своєї наступної подорожі",
    subtitle: "Від готелів до приватних помешкань – знайдіть те, що потрібно.",
    locationLabel: "Куди прямуєте?",
    locationPlaceholder: "Введіть місцезнаходження",
    guestsLabel: "Кількість гостей",
    typeLabel: "Тип помешкання",
    options: {
      apart: "Квартири",
      apartment: "Апартаменти",
      hotel: "Готель",
      hostel: "Хостел",
      house: "Будинок",
      recreationCenter: "База відпочинку",
      sauna: "Cауна/Баня",
    },
    searchButton: "Пошук",
    searchAlert: "Пошук виконано!",
    errorMessages: {
      location: "Будь ласка, виберіть місцезнаходження.",
      guests: "Будь ласка, вкажіть кількість гостей.",
      type: "Будь ласка, виберіть тип помешкання.",
    },
  },
  ru: {
    title: "Выбирайте жилье для следующего путешествия",
    subtitle: "От отелей до частных домов – найдите то, что нужно.",
    locationLabel: "Куда направляетесь?",
    locationPlaceholder: "Введите местоположение",
    guestsLabel: "Количество гостей",
    typeLabel: "Тип жилья",
    options: {
      apart: "Квартиры",
      apartment: "Апартаменты",
      hotel: "Гостиница",
      hostel: "Хостел",
      house: "Дом",
      recreationCenter: "База отдыха",
      sauna: "Сауна/Баня",
    },
    searchButton: "Поиск",
    searchAlert: "Поиск выполнен!",
    errorMessages: {
      location: "Пожалуйста, выберите местоположение.",
      guests: "Пожалуйста, укажите количество гостей.",
      type: "Пожалуйста, выберите тип жилья.",
    },
  },
};

const Search = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({});
  const { currentLanguage } = useLanguage();
  const translation = translations[currentLanguage];
  const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

  const validateForm = () => {
    const newErrors = {};
    if (!location) newErrors.location = translation.errorMessages.location;
    if (!guests || guests < 1) newErrors.guests = translation.errorMessages.guests;
    if (!type) newErrors.type = translation.errorMessages.type;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(translation.searchAlert);
    }
  };

  return (
    <section className={styles.searchSection}>
      <h1 className={styles.title}>{translation.title}</h1>
      <p className={styles.subtitle}>{translation.subtitle}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="location">{translation.locationLabel}</label>
          <Autocomplete
            apiKey={googleMapsApiKey}
            onPlaceSelected={(place) => {
              const formattedAddress = place?.formatted_address || "";
              if (formattedAddress) {
                setLocation(formattedAddress);
                setErrors((prevErrors) => ({ ...prevErrors, location: undefined }));
              }
            }}
            options={{
              types: ["(cities)"],
              componentRestrictions: {
                country: currentLanguage === "ua" ? "ua" : "ru",
              },
            }}
            placeholder={translation.locationPlaceholder}
          />
          {errors.location && <span className={styles.error}>{errors.location}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="guests">{translation.guestsLabel}</label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            value={guests > 1 ? guests : ""}
            onChange={(e) => {
              const value = Number(e.target.value);
              setGuests(value >= 1 ? value : 1);
              setErrors((prevErrors) => ({ ...prevErrors, guests: undefined }));
            }}
            onBlur={(e) => {
              if (!e.target.value) setGuests(1);
            }}
            min="1"
          />
          {errors.guests && <span className={styles.error}>{errors.guests}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type">{translation.typeLabel}</label>
          <select
            id="type"
            className={styles.selectGroup}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, type: undefined }));
            }}
          >
            <option value="">{translation.typeLabel}</option>
            <option value="apart">{translation.options.apart}</option>
            <option value="apartment">{translation.options.apartment}</option>
            <option value="hotel">{translation.options.hotel}</option>
            <option value="hostel">{translation.options.hostel}</option>
            <option value="house">{translation.options.house}</option>
            <option value="recreationCenter">{translation.options.recreationCenter}</option>
            <option value="sauna">{translation.options.sauna}</option>
          </select>
          {errors.type && <span className={styles.error}>{errors.type}</span>}
        </div>

        <button type="submit" className={styles.searchButton}>
          {translation.searchButton}
        </button>
      </form>
    </section>
  );
};

export default Search;

