



// import React, { useState } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import { GoogleMap, Marker } from '@react-google-maps/api';
// import styles from '@/app/styles/Add-apartment.module.scss';

// const AddApartment = () => {
//   // Состояния
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     street: '',
//     houseNumber: '',
//     description: '',
//     price: '',
//     category: '',
//     metro: '',
//   });
//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showMetro, setShowMetro] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [city, setCity] = useState('');
//   const [streetError, setStreetError] = useState('');

//   // Константы
//   const categories = ['Квартира', 'Апартаменты', 'Гостиница', 'Хостел', 'Дом', 'База отдыха', 'Сауна/Баня'];
//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w"; // Ваш ключ API

//   // Списки метро
//   const metroStations = {
//     kyiv: [
//       'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт',
//       'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная',
//       'Дарница', 'Черниговская', 'Лесная'
//     ],
//     kharkiv: [
//       'Холодная Гора', 'Южный Вокзал', 'Центральный Рынок', 'Площадь Конституции', 'Проспект Гагарина', 'Спортивная',
//       'Завод имени Малышева', 'Московский проспект', 'Дворец Спорта', 'Армейская', 'Имени А.С. Масельского',
//       'Тракторный Завод', 'Индустриальная'
//     ],
//     dnipropetrovsk: [
//       'Вокзальна', 'Метростроителей', 'Центральна', 'Покровская', 'Проспект Свободы', 'Театральная ' // Добавлены станции для Днепра
      
//    ]
//   };

//   // Обработчики событий

//   // Выбор города
//   const handleCitySelect = (place) => {
//     const formattedAddress = place?.formatted_address || '';
//     setFormData((prevData) => ({
//       ...prevData,
//       city: formattedAddress,
//     }));
//     setCity(formattedAddress);

//     // Устанавливаем центр карты на выбранный город
//     if (place.geometry && place.geometry.location) {
//       setSelectedLocation({
//         lat: place.geometry.location.lat(),
//         lng: place.geometry.location.lng(),
//       });
//     }

//     // Проверяем, является ли город Киевом, Харьковом или Днепром
//     const cityLower = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => cityLower.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => cityLower.includes(name));
//     const isDnipropetrovsk = ['днепр', 'дніпро', 'dnipropetrovsk'].some((name) => cityLower.includes(name));

//     console.log('Выбранный город:', formattedAddress);
//     console.log('Показывать метро?', isKyiv || isKharkiv || isDnipropetrovsk);

//     setShowMetro(isKyiv || isKharkiv || isDnipropetrovsk); // Показываем метро, если город Киев, Харьков или Днепр
//     if (!isKyiv && !isKharkiv && !isDnipropetrovsk) {
//       setFormData((prevData) => ({ ...prevData, metro: '' }));
//     }
//   };

//   // Выбор улицы
//   const handleStreetSelect = (place) => {
//     const address = place?.formatted_address || '';
//     const street = address.split(',')[0]; // Извлекаем только улицу

//     // Проверяем, что улица находится в выбранном городе
//     if (city && !address.toLowerCase().includes(city.toLowerCase())) {
//       setStreetError('Улица не найдена в выбранном городе. Пожалуйста, выберите улицу из списка.');
//       return;
//     } else {
//       setStreetError(''); // Очищаем ошибку, если улица найдена
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       street: street,
//     }));

//     // Проверяем, что place и place.geometry существуют
//     if (place && place.geometry) {
//       setSelectedLocation(place.geometry.location); // Устанавливаем точку на карте
//     } else {
//       setSelectedLocation(null); // Если place не определён, сбрасываем selectedLocation
//     }
//   };

//   // Загрузка фотографий
//   const handlePhotoChange = (e) => {
//     const files = e.target.files;
//     if (files.length > 7) {
//       alert('Можно загрузить не более 7 фотографий.');
//       return;
//     }
//     setPhotos(Array.from(files));
//   };

//   // Перетаскивание маркера
//   const handleMarkerDragEnd = (event) => {
//     const newLocation = event.latLng;
//     setSelectedLocation(newLocation);
//     setFormData((prevData) => ({
//       ...prevData,
//       latitude: newLocation.lat(),
//       longitude: newLocation.lng(),
//     }));
//   };

//   // Загрузка карты
//   const onMapLoad = (map) => {
//     if (selectedLocation) {
//       map.panTo(selectedLocation);
//     }
//   };

//   // Выбор категории
//   const handleCategorySelect = (category) => {
//     setFormData((prevData) => ({ ...prevData, category }));
//     setShowCategories(false);
//   };

//   // Отправка формы
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

//   // Определяем, какой список метро показывать
//   const getMetroStations = () => {
//     const cityLower = city.toLowerCase();
//     if (cityLower.includes('киев') || cityLower.includes('київ') || cityLower.includes('kyiv')) {
//       return metroStations.kyiv;
//     } else if (cityLower.includes('харьков') || cityLower.includes('харків') || cityLower.includes('kharkiv')) {
//       return metroStations.kharkiv;
//     } else if (cityLower.includes('днепр') || cityLower.includes('дніпро') || cityLower.includes('dnipropetrovsk')) {
//       return metroStations.dnipropetrovsk;
//     }
//     return [];
//   };

//   console.log('Список метро:', getMetroStations());

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
//           Фотографии (максимум 7):
//           <input
//             className={styles.input}
//             type="file"
//             multiple
//             onChange={handlePhotoChange}
//             accept="image/*"
//             required
//           />
//           <span className={styles.photoHint}>Выбрано фотографий: {photos.length}/7</span>
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

//         {/* Метро (для Киева, Харькова и Днепра) */}
//         {showMetro && (
//           <label className={styles.label}>
//             Метро:
//             <select
//               className={styles.input}
//               name="metro"
//               value={formData.metro}
//               onChange={(e) =>
//                 setFormData((prevData) => ({
//                   ...prevData,
//                   metro: e.target.value,
//                 }))
//               }
//               required
//             >
//               <option value="">Выберите станцию метро</option>
//               {getMetroStations().map((station) => (
//                 <option key={station} value={station}>
//                   {station}
//                 </option>
//               ))}
//             </select>
//           </label>
//         )}

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

//         {/* Улица */}
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
//           {streetError && <span className={styles.error}>{streetError}</span>}
//         </label>

//         {/* Карта с маркером */}
//         {selectedLocation && (
//           <GoogleMap
//             mapContainerStyle={{ width: '100%', height: '400px' }}
//             center={selectedLocation}
//             zoom={15}
//             onLoad={onMapLoad}
//           >
//             <Marker
//               position={selectedLocation}
//               draggable={true}
//               onDragEnd={handleMarkerDragEnd}
//             />
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



import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';
import { GoogleMap, Marker } from '@react-google-maps/api';
import styles from '@/app/styles/Add-apartment.module.scss';

const AddApartment = () => {
  // Состояния
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    street: '',
    houseNumber: '',
    description: '',
    price: '',
    category: '',
    metro: '',
  });
  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMetro, setShowMetro] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [city, setCity] = useState('');
  const [streetError, setStreetError] = useState('');
  const [useManualStreetInput, setUseManualStreetInput] = useState(false); // Новое состояние для ручного ввода улицы

  // Константы
  const categories = ['Квартира', 'Апартаменты', 'Гостиница', 'Хостел', 'Дом', 'База отдыха', 'Сауна/Баня'];
  const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w"; // Ваш ключ API

  // Списки метро
  const metroStations = {
    kyiv: [
      'Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт',
      'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная',
      'Дарница', 'Черниговская', 'Лесная'
    ],
    kharkiv: [
      'Холодная Гора', 'Южный Вокзал', 'Центральный Рынок', 'Площадь Конституции', 'Проспект Гагарина', 'Спортивная',
      'Завод имени Малышева', 'Московский проспект', 'Дворец Спорта', 'Армейская', 'Имени А.С. Масельского',
      'Тракторный Завод', 'Индустриальная'
    ],
    dnipropetrovsk: [
      'Вокзальна', 'Метростроителей', 'Центральна', 'Покровская', 'Проспект Свободы', 'Театральная ' // Добавлены станции для Днепра
    ]
  };

  // Обработчики событий

  // Выбор города
  const handleCitySelect = (place) => {
    const formattedAddress = place?.formatted_address || '';
    setFormData((prevData) => ({
      ...prevData,
      city: formattedAddress,
    }));
    setCity(formattedAddress);

    // Устанавливаем центр карты на выбранный город
    if (place.geometry && place.geometry.location) {
      setSelectedLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }

    // Проверяем, является ли город Киевом, Харьковом или Днепром
    const cityLower = formattedAddress.toLowerCase();
    const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => cityLower.includes(name));
    const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => cityLower.includes(name));
    const isDnipropetrovsk = ['днепр', 'дніпро', 'dnipropetrovsk'].some((name) => cityLower.includes(name));

    console.log('Выбранный город:', formattedAddress);
    console.log('Показывать метро?', isKyiv || isKharkiv || isDnipropetrovsk);

    setShowMetro(isKyiv || isKharkiv || isDnipropetrovsk); // Показываем метро, если город Киев, Харьков или Днепр
    if (!isKyiv && !isKharkiv && !isDnipropetrovsk) {
      setFormData((prevData) => ({ ...prevData, metro: '' }));
    }
  };

  // Выбор улицы через Google Autocomplete
  const handleStreetSelect = (place) => {
    const address = place?.formatted_address || '';
    const street = address.split(',')[0]; // Извлекаем только улицу

    // Проверяем, что улица находится в выбранном городе
    if (city && !address.toLowerCase().includes(city.toLowerCase())) {
      setStreetError('Улица не найдена в выбранном городе. Пожалуйста, выберите улицу из списка.');
      return;
    } else {
      setStreetError(''); // Очищаем ошибку, если улица найдена
    }

    setFormData((prevData) => ({
      ...prevData,
      street: street,
    }));

    // Проверяем, что place и place.geometry существуют
    if (place && place.geometry) {
      setSelectedLocation(place.geometry.location); // Устанавливаем точку на карте
    } else {
      setSelectedLocation(null); // Если place не определён, сбрасываем selectedLocation
    }
  };

  // Ручной ввод улицы
  const handleManualStreetInput = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      street: e.target.value,
    }));
  };

  // Переключение между автодополнением и ручным вводом
  const toggleStreetInputMode = () => {
    setUseManualStreetInput(!useManualStreetInput);
    setFormData((prevData) => ({
      ...prevData,
      street: '', // Сбрасываем значение улицы при переключении
    }));
  };

  // Загрузка фотографий
  const handlePhotoChange = (e) => {
    const files = e.target.files;
    if (files.length > 7) {
      alert('Можно загрузить не более 7 фотографий.');
      return;
    }
    setPhotos(Array.from(files));
  };

  // Перетаскивание маркера
  const handleMarkerDragEnd = (event) => {
    const newLocation = event.latLng;
    setSelectedLocation(newLocation);
    setFormData((prevData) => ({
      ...prevData,
      latitude: newLocation.lat(),
      longitude: newLocation.lng(),
    }));
  };

  // Загрузка карты
  const onMapLoad = (map) => {
    if (selectedLocation) {
      map.panTo(selectedLocation);
    }
  };

  // Выбор категории
  const handleCategorySelect = (category) => {
    setFormData((prevData) => ({ ...prevData, category }));
    setShowCategories(false);
  };

  // Отправка формы
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

  // Определяем, какой список метро показывать
  const getMetroStations = () => {
    const cityLower = city.toLowerCase();
    if (cityLower.includes('киев') || cityLower.includes('київ') || cityLower.includes('kyiv')) {
      return metroStations.kyiv;
    } else if (cityLower.includes('харьков') || cityLower.includes('харків') || cityLower.includes('kharkiv')) {
      return metroStations.kharkiv;
    } else if (cityLower.includes('днепр') || cityLower.includes('дніпро') || cityLower.includes('dnipropetrovsk')) {
      return metroStations.dnipropetrovsk;
    }
    return [];
  };

  console.log('Список метро:', getMetroStations());

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
          Фотографии (максимум 7):
          <input
            className={styles.input}
            type="file"
            multiple
            onChange={handlePhotoChange}
            accept="image/*"
            required
          />
          <span className={styles.photoHint}>Выбрано фотографий: {photos.length}/7</span>
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

        {/* Метро (для Киева, Харькова и Днепра) */}
        {showMetro && (
          <label className={styles.label}>
            Метро:
            <select
              className={styles.input}
              name="metro"
              value={formData.metro}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  metro: e.target.value,
                }))
              }
              required
            >
              <option value="">Выберите станцию метро</option>
              {getMetroStations().map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
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

        {/* Улица */}
        <label className={styles.label}>
          Улица:
          {useManualStreetInput ? (
            <input
              className={styles.input}
              type="text"
              name="street"
              value={formData.street}
              onChange={handleManualStreetInput}
              placeholder="Введите улицу вручную"
              required
            />
          ) : (
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
          )}
          <button 
          
            type="button"
            onClick={toggleStreetInputMode}
            className={styles.toggleButton}
          >
            {useManualStreetInput ? 'Выбрать улицу из списка' : 'Ввести улицу вручную'}
          </button>
          {streetError && <span className={styles.error}>{streetError}</span>}
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