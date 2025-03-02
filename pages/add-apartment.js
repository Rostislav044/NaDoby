




// import React, { useState } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import styles from '@/app/styles/Add-apartment.module.scss';

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     description: '',
//     price: '',
//     category: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showMetro, setShowMetro] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);

//   const categories = ['Квартира', 'Апартаменты', 'Гостиница', 'Хостел', 'Дом','База отдыха', 'Сауна/Баня'];
 
//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

//   const handleCitySelect = (place) => {
//     const formattedAddress = place?.formatted_address || '';
//     setFormData((prevData) => ({
//       ...prevData,
//       city: formattedAddress,
//     }));

//     const city = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

//     setShowMetro(isKyiv || isKharkiv);
//     if (!isKyiv && !isKharkiv) {
//       setFormData((prevData) => ({ ...prevData, metro: '' }));
//     }
//   };

//   const handleCategorySelect = (category) => {
//     setFormData((prevData) => ({ ...prevData, category }));
//     setShowCategories(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     for (let i = 0; i < photos.length; i++) {
//       data.append('photos', photos[i]);
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/apartments/add', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Квартира успешно добавлена!');
//       console.log('Отправка события apartmentAdded:', response.data);
//       window.dispatchEvent(new CustomEvent('apartmentAdded', { detail: response.data }));

//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Создайте объявление</h1>


      
//       <form className={styles.form} onSubmit={handleSubmit}>

//       <label className={styles.label} onClick={() => setShowCategories(!showCategories)}>
//   Категория:
//   <div className={styles.inputWrapper}>
//     <input
//       className={styles.input}
//       type="text"
//       name="category"
//       value={formData.category}
//       readOnly
//       placeholder="Выберите категорию"
//     />
//     <img
//       alt="стрелка"
//       loading="lazy"
//       width="14"
//       height="14"
//       src="/angle.svg"
//       className={styles.arrow} // добавляем класс для стилизации
//     />
//   </div>
// </label>

// {showCategories && (
//   <ul className={styles.categoryList}>
//     {categories.map((cat) => (
//       <li key={cat} onClick={() => handleCategorySelect(cat)} className={styles.categoryItem}>
//         {cat}
//       </li>
//     ))}
//   </ul>
// )}


//   {/* Заголовок объявления */}
//   <label className={styles.label}>
//           Заголовок объявления:
//           <input
//             className={styles.input}
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 title: e.target.value,
//               }))
//             }
//             placeholder="Например, Сдам 2 комнатную квартиру с евроремонтом"
//             required
//           />
//         </label>

//         <label className={styles.label}>
//           Описание:
//           <textarea
//             className={styles.textarea}
//             name="description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 description: e.target.value,
//               }))
//             }
//             required
//           ></textarea>
//         </label>

//         <label className={styles.label}>
//           Фотографии:
//           <input
//             className={styles.input}
//             type="file"
//             multiple
//             onChange={(e) => setPhotos(e.target.files)}
//             accept="image/*"
//             required
//           />
//         </label>

//         <label className={styles.label}>
//           Цена:
//           <input
//             className={styles.input}
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 price: e.target.value,
//               }))
//             }
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>

//         <label className={styles.label}>
//           Город:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={handleCitySelect}
//             options={{
//               types: ['(cities)'],
//               componentRestrictions: { country: 'ua' },
//             }}
//             placeholder="Введите город"
//             className={styles.inputCity}
//           />
//         </label>

//         <label className={styles.label}>
//           Район:
//           <input
//             className={styles.input}
//             type="text"
//             name="district"
//             value={formData.district}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 district: e.target.value,
//               }))
//             }
//             required
//           />
//         </label>







//         {showMetro && (
//           <label className={styles.label}>
//             Метро:
//             <input
//               className={styles.input}
//               type="text"
//               name="metro"
//               value={formData.metro}
//               onChange={(e) =>
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   metro: e.target.value,
//                 }))
//               }
//             />
//           </label>
//         )}

        

        

        

//         <button className={styles.button} type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import { GoogleMap, Marker } from '@react-google-maps/api';
// import styles from '@/app/styles/Add-apartment.module.scss';

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     street: '',
//     houseNumber: '',
//     description: '',
//     price: '',
//     category: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showMetro, setShowMetro] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState(null);  // Для карты
//   const [autocomplete, setAutocomplete] = useState(null); // Для автозаполнения

//   const categories = ['Квартира', 'Апартаменты', 'Гостиница', 'Хостел', 'Дом', 'База отдыха', 'Сауна/Баня'];

//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

//   // Функция для обработки выбора города
//   const handleCitySelect = (place) => {
//     const formattedAddress = place?.formatted_address || '';
//     setFormData((prevData) => ({
//       ...prevData,
//       city: formattedAddress,
//     }));

//     const city = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

//     setShowMetro(isKyiv || isKharkiv);
//     if (!isKyiv && !isKharkiv) {
//       setFormData((prevData) => ({ ...prevData, metro: '' }));
//     }
//   };

//   // Функция для выбора улицы с помощью автозаполнения
//   const handleStreetSelect = (place) => {
//     const address = place?.formatted_address || '';
//     const street = address.split(',')[0];  // Для примера, мы извлекаем только улицу
//     setFormData((prevData) => ({
//       ...prevData,
//       street: street,
//     }));
//     setSelectedLocation(place.geometry.location);  // Устанавливаем выбранную точку на карте
//   };

//   // Загружаем карту и устанавливаем метку на выбранный адрес
//   const onMapLoad = (map) => {
//     if (selectedLocation) {
//       map.panTo(selectedLocation);
//     }
//   };

//   useEffect(() => {
//     if (autocomplete) {
//       autocomplete.setTypes(['geocode']);  // Настройка автозаполнения для адресов
//     }
//   }, [autocomplete]);

//   const handleCategorySelect = (category) => {
//     setFormData((prevData) => ({ ...prevData, category }));
//     setShowCategories(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     for (let i = 0; i < photos.length; i++) {
//       data.append('photos', photos[i]);
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/apartments/add', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Квартира успешно добавлена!');
//       console.log('Отправка события apartmentAdded:', response.data);
//       window.dispatchEvent(new CustomEvent('apartmentAdded', { detail: response.data }));
//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Создайте объявление</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         {/* Выбор категории */}
//         <label className={styles.label} onClick={() => setShowCategories(!showCategories)}>
//           Категория:
//           <div className={styles.inputWrapper}>
//             <input
//               className={styles.input}
//               type="text"
//               name="category"
//               value={formData.category}
//               readOnly
//               placeholder="Выберите категорию"
//             />
//             <img alt="стрелка" loading="lazy" width="14" height="14" src="/angle.svg" className={styles.arrow} />
//           </div>
//         </label>

//         {showCategories && (
//           <ul className={styles.categoryList}>
//             {categories.map((cat) => (
//               <li key={cat} onClick={() => handleCategorySelect(cat)} className={styles.categoryItem}>
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Заголовок объявления */}
//         <label className={styles.label}>
//           Заголовок объявления:
//           <input
//             className={styles.input}
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 title: e.target.value,
//               }))
//             }
//             placeholder="Например, Сдам 2 комнатную квартиру с евроремонтом"
//             required
//           />
//         </label>

//         {/* Описание */}
//         <label className={styles.label}>
//           Описание:
//           <textarea
//             className={styles.textarea}
//             name="description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 description: e.target.value,
//               }))
//             }
//             required
//           ></textarea>
//         </label>

//         {/* Фотографии */}
//         <label className={styles.label}>
//           Фотографии:
//           <input
//             className={styles.input}
//             type="file"
//             multiple
//             onChange={(e) => setPhotos(e.target.files)}
//             accept="image/*"
//             required
//           />
//         </label>

//         {/* Цена */}
//         <label className={styles.label}>
//           Цена:
//           <input
//             className={styles.input}
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 price: e.target.value,
//               }))
//             }
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>

//         {/* Город */}
//         <label className={styles.label}>
//           Город:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={handleCitySelect}
//             options={{
//               types: ['(cities)'],
//               componentRestrictions: { country: 'ua' },
//             }}
//             placeholder="Введите город"
//             className={styles.inputCity}
//           />
//         </label>

//         {/* Район */}
//         <label className={styles.label}>
//           Район:
//           <input
//             className={styles.input}
//             type="text"
//             name="district"
//             value={formData.district}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 district: e.target.value,
//               }))
//             }
//             required
//           />
//         </label>

//         {/* Улица с автозаполнением */}
//         <label className={styles.label}>
//           Улица:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={handleStreetSelect}
//             options={{
//               types: ['geocode'],
//               componentRestrictions: { country: 'ua' },
//               fields: ['formatted_address', 'geometry'],
//             }}
//             placeholder="Выберите улицу"
//             className={styles.input}
//           />
//         </label>

//         {/* Карта с маркером */}
//         {selectedLocation && (
//           <GoogleMap
//             mapContainerStyle={{ width: '100%', height: '400px' }}
//             center={selectedLocation}
//             zoom={15}
//             onLoad={onMapLoad}
//           >
//             <Marker position={selectedLocation} />
//           </GoogleMap>
//         )}

//         {/* Кнопка отправки формы */}
//         <button className={styles.button} type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';
import { GoogleMap, Marker } from '@react-google-maps/api'; // Убедитесь, что этот компонент импортируется
import styles from '@/app/styles/Add-apartment.module.scss';

const AddApartment = () => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    street: '',
    houseNumber: '',
    description: '',
    price: '',
    category: '',
    metro: '', // Добавляем поле для метро
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMetro, setShowMetro] = useState(false);  // Управляем отображением метро
  const [showCategories, setShowCategories] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [city, setCity] = useState('');
  
  const categories = ['Квартира', 'Апартаменты', 'Гостиница', 'Хостел', 'Дом', 'База отдыха', 'Сауна/Баня'];

  const googleMapsApiKey =  "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w"; // Ваш ключ API для Google Maps

  // Функция для обработки выбора города
  const handleCitySelect = (place) => {
    const formattedAddress = place?.formatted_address || '';
    setFormData((prevData) => ({
      ...prevData,
      city: formattedAddress,
    }));
    setCity(formattedAddress); // Сохраняем название города

    const cityLower = formattedAddress.toLowerCase();
    const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => cityLower.includes(name));
    const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => cityLower.includes(name));

    setShowMetro(isKyiv || isKharkiv); // Показываем метро, если город Киев или Харьков
    if (!isKyiv && !isKharkiv) {
      setFormData((prevData) => ({ ...prevData, metro: '' }));
    }
  };

  // Функция для выбора улицы
  const handleStreetSelect = (place) => {
    const address = place?.formatted_address || '';
    const street = address.split(',')[0];  // Извлекаем только улицу
    setFormData((prevData) => ({
      ...prevData,
      street: street,
    }));
    setSelectedLocation(place.geometry.location);  // Устанавливаем точку на карте
  };

  // Обработчик события для перетаскивания маркера
  const handleMarkerDragEnd = (event) => {
    const newLocation = event.latLng;
    setSelectedLocation(newLocation);  // Обновляем положение маркера
    setFormData((prevData) => ({
      ...prevData,
      latitude: newLocation.lat(),
      longitude: newLocation.lng(),
    }));
  };

  // Загружаем карту и устанавливаем метку
  const onMapLoad = (map) => {
    if (selectedLocation) {
      map.panTo(selectedLocation);
    }
  };

  useEffect(() => {
    if (autocomplete) {
      autocomplete.setTypes(['geocode']);
    }
  }, [autocomplete]);

  const handleCategorySelect = (category) => {
    setFormData((prevData) => ({ ...prevData, category }));
    setShowCategories(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    for (let i = 0; i < photos.length; i++) {
      data.append('photos', photos[i]);
    }

    try {
      const response = await axios.post('http://localhost:3001/api/apartments/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Квартира успешно добавлена!');
      console.log('Отправка события apartmentAdded:', response.data);
      window.dispatchEvent(new CustomEvent('apartmentAdded', { detail: response.data }));
    } catch (error) {
      console.error('Ошибка при добавлении квартиры:', error);
      alert('Произошла ошибка, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Создайте объявление</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Выбор категории */}
        <label className={styles.label} onClick={() => setShowCategories(!showCategories)}>
          Категория:
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              name="category"
              value={formData.category}
              readOnly
              placeholder="Выберите категорию"
            />
            <img alt="стрелка" loading="lazy" width="14" height="14" src="/angle.svg" className={styles.arrow} />
          </div>
        </label>

        {showCategories && (
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li key={cat} onClick={() => handleCategorySelect(cat)} className={styles.categoryItem}>
                {cat}
              </li>
            ))}
          </ul>
        )}

        {/* Заголовок объявления */}
        <label className={styles.label}>
          Заголовок объявления:
          <input
            className={styles.input}
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                title: e.target.value,
              }))
            }
            placeholder="Например, Сдам 2 комнатную квартиру с евроремонтом"
            required
          />
        </label>

        {/* Описание */}
        <label className={styles.label}>
          Описание:
          <textarea
            className={styles.textarea}
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
            required
          ></textarea>
        </label>

        {/* Фотографии */}
        <label className={styles.label}>
          Фотографии:
          <input
            className={styles.input}
            type="file"
            multiple
            onChange={(e) => setPhotos(e.target.files)}
            accept="image/*"
            required
          />
        </label>

        {/* Цена */}
        <label className={styles.label}>
          Цена:
          <input
            className={styles.input}
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                price: e.target.value,
              }))
            }
            required
            min="0"
            placeholder="Введите цену"
          />
        </label>

        {/* Город */}
        <label className={styles.label}>
          Город:
          <Autocomplete
            apiKey={googleMapsApiKey}
            onPlaceSelected={handleCitySelect}
            options={{
              types: ['(cities)'],
              componentRestrictions: { country: 'ua' },
            }}
            placeholder="Введите город"
            className={styles.inputCity}
          />
        </label>

        {/* Показываем выбор метро, если город Киев или Харьков */}
        {showMetro && (
          <label className={styles.label}>
            Метро:
            <input
              className={styles.input}
              type="text"
              name="metro"
              value={formData.metro}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  metro: e.target.value,
                }))
              }
              placeholder="Введите станцию метро"
            />
          </label>
        )}

        {/* Район */}
        <label className={styles.label}>
          Район:
          <input
            className={styles.input}
            type="text"
            name="district"
            value={formData.district}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                district: e.target.value,
              }))
            }
            required
          />
        </label>

        {/* Улица с автозаполнением */}
        <label className={styles.label}>
          Улица:
          <Autocomplete
            apiKey={googleMapsApiKey}
            onPlaceSelected={handleStreetSelect}
            options={{
              types: ['geocode'],
              componentRestrictions: { country: 'ua' },
              fields: ['formatted_address', 'geometry'],
            }}
            placeholder="Выберите улицу"
            className={styles.input}
          />
        </label>

        {/* Карта с маркером */}
        {selectedLocation && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={selectedLocation}
            zoom={15}
            onLoad={onMapLoad}
          >
            <Marker
              position={selectedLocation}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
            />
          </GoogleMap>
        )}

        {/* Кнопка отправки формы */}
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Добавление...' : 'Добавить'}
        </button>
      </form>
    </div>
  );
};

export default AddApartment;
