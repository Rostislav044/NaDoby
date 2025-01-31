

// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     hasMetro: false,
//     description: '',
//     price: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setPhotos(e.target.files);
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
//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Добавить квартиру</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label className={styles.label}>
//           Город:
//           <input className={styles.input} type="text" name="city" value={formData.city} onChange={handleChange} required />
//         </label>
//         <label className={styles.label}>
//           Район:
//           <input className={styles.input} type="text" name="district" value={formData.district} onChange={handleChange} required />
//         </label>
//         <label className={styles.label}>
//           Метро:
//           <input className={styles.input} type="text" name="metro" value={formData.metro} onChange={handleChange} />
//         </label>
//         <label className={styles.label}>
//           Есть метро:
//           <input className={styles.input} type="checkbox" name="hasMetro" checked={formData.hasMetro} onChange={handleChange} />
//         </label>
//         <label className={styles.label}>
//           Описание:
//           <textarea className={styles.textarea} name="description" value={formData.description} onChange={handleChange} required></textarea>
//         </label>
//         <label className={styles.label}>
//           Цена:
//           <input
//             className={styles.input}
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>
//         <label className={styles.label}>
//           Фотографии:
//           <input className={styles.input} type="file" multiple onChange={handleFileChange} accept="image/*" required />
//         </label>
//         <button className={styles.button} type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     hasMetro: false,
//     description: '',
//     price: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";
//   // Ваш ключ API Google Maps

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setPhotos(e.target.files);
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
//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Добавить квартиру</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label className={styles.label}>
//           Город:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={(place) => {
//               const formattedAddress = place?.formatted_address || "";
//               setFormData((prevData) => ({
//                 ...prevData,
//                 city: formattedAddress,
//               }));
//             }}
//             options={{
//               types: ["(cities)"], // Ограничить результат только городами
//               componentRestrictions: { country: "ua" }, // Ограничение по стране (для Украины)
//             }}
//             placeholder="Введите город"
//             value={formData.city}
//             onChange={handleChange}
//           />
//         </label>
//         <label className={styles.label}>
//           Район:
//           <input className={styles.input} type="text" name="district" value={formData.district} onChange={handleChange} required />
//         </label>
//         <label className={styles.label}>
//           Метро:
//           <input className={styles.input} type="text" name="metro" value={formData.metro} onChange={handleChange} />
//         </label>
//         <label className={styles.label}>
//           Есть метро:
//           <input className={styles.input} type="checkbox" name="hasMetro" checked={formData.hasMetro} onChange={handleChange} />
//         </label>
//         <label className={styles.label}>
//           Описание:
//           <textarea className={styles.textarea} name="description" value={formData.description} onChange={handleChange} required></textarea>
//         </label>
//         <label className={styles.label}>
//           Цена:
//           <input
//             className={styles.input}
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>
//         <label className={styles.label}>
//           Фотографии:
//           <input className={styles.input} type="file" multiple onChange={handleFileChange} accept="image/*" required />
//         </label>
//         <button className={styles.button} type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     description: '',
//     price: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showMetro, setShowMetro] = useState(false); // Для управления видимостью поля "Метро"
//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzJ-yozBBx_gpY3w";

//   // Обработка изменения значений в форме
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Обработка изменения файлов (фотографий)
//   const handleFileChange = (e) => {
//     setPhotos(e.target.files);
//   };

//   // Обработка отправки формы
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
//       await axios.post('http://localhost:3001/api/apartments/add', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Квартира успешно добавлена!');
//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Обработка выбора города
//   const handleCitySelect = (place) => {
//     const formattedAddress = place?.formatted_address || '';
//     setFormData((prevData) => ({
//       ...prevData,
//       city: formattedAddress,
//     }));

//     // Проверка на совпадение с Киевом или Харьковом (учитываются разные написания)
//     const city = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

//     if (isKyiv || isKharkiv) {
//       setShowMetro(true); // Показываем поле метро, если выбран Киев или Харьков
//     } else {
//       setShowMetro(false); // Скрываем поле метро, если выбран другой город
//       setFormData((prevData) => ({
//         ...prevData,
//         metro: '', // Очищаем значение метро
//       }));
//     }
//   };

//   return (
//     <div>
//       <h1>Добавить квартиру</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         {/* Поле ввода города */}
//         <label className={styles.label}>
//           Город:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={handleCitySelect}
//             options={{
//               types: ['(cities)'], // Ограничить результат только городами
//               componentRestrictions: { country: 'ua' }, // Ограничение по стране (Украина)
//             }}
//             placeholder="Введите город"
//             value={formData.city}
//             onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//           />
//         </label>

//         {/* Поле ввода района */}
//         <label className={styles.label}>
//           Район:
//           <input
//             className={styles.input}
//             type="text"
//             name="district"
//             value={formData.district}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         {/* Поле ввода метро (показывается только для Киева и Харькова) */}
//         {showMetro && (
//           <label className={styles.label}>
//             Метро:
//             <input
//               className={styles.input}
//               type="text"
//               name="metro"
//               value={formData.metro}
//               onChange={handleChange}
//             />
//           </label>
//         )}

//         {/* Поле ввода описания */}
//         <label className={styles.label}>
//           Описание:
//           <textarea
//             className={styles.textarea}
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </label>

//         {/* Поле ввода цены */}
//         <label className={styles.label}>
//           Цена:
//           <input
//             className={styles.input}
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>

//         {/* Поле загрузки фотографий */}
//         <label className={styles.label}>
//           Фотографии:
//           <input
//             className={styles.input}
//             type="file"
//             multiple
//             onChange={handleFileChange}
//             accept="image/*"
//             required
//           />
//         </label>

//         {/* Кнопка отправки формы */}
//         <button className={styles.button} type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Autocomplete from 'react-google-autocomplete';
// import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     description: '',
//     price: '',
//   });

//   const [photos, setPhotos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showMetro, setShowMetro] = useState(false);

//   const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

//   // Обработка выбора города
//   const handleCitySelect = (place) => {
//     const formattedAddress = place?.formatted_address || '';
//     setFormData((prevData) => ({
//       ...prevData,
//       city: formattedAddress,
//     }));

//     // Проверка, если выбран город, показываем поле метро (убрали логику для Киева и Харькова)
//     if (formattedAddress) {
//       setShowMetro(true); // Здесь можно оставить логику по показу метро, если хотите.
//     } else {
//       setShowMetro(false);
//     }
//   };

//   // Обработка отправки формы
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
//       await axios.post('http://localhost:3001/api/apartments/add', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Квартира успешно добавлена!');
//     } catch (error) {
//       console.error('Ошибка при добавлении квартиры:', error);
//       alert('Произошла ошибка, попробуйте еще раз.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Добавить квартиру</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         {/* Поле ввода города */}
//         <label className={styles.label}>
//           Город:
//           <Autocomplete
//             apiKey={googleMapsApiKey}
//             onPlaceSelected={handleCitySelect}
//             options={{
//               types: ['(cities)'], // Ограничение результата только городами
//               componentRestrictions: { country: 'ua' }, // Ограничение по стране (Украина)
//             }}
//             placeholder="Введите город"
//           />
//         </label>

//         {/* Поле ввода района */}
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

//         {/* Поле метро (только если выбран город) */}
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

//         {/* Поле описания */}
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

//         {/* Поле цены */}
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

//         {/* Поле загрузки фотографий */}
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

//         {/* Кнопка отправки */}
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
import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

const AddApartment = () => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    metro: '',
    description: '',
    price: '',
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMetro, setShowMetro] = useState(false);

  const googleMapsApiKey = "AIzaSyBBFJdnxDmbAko4mbzBzJ-yozBBx_gpY3w";

  // Обработка выбора города
  const handleCitySelect = (place) => {
    const formattedAddress = place?.formatted_address || '';
    setFormData((prevData) => ({
      ...prevData,
      city: formattedAddress,
    }));

    // Проверка, если выбран Киев или Харьков, показываем поле метро
    const city = formattedAddress.toLowerCase();
    const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
    const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

    if (isKyiv || isKharkiv) {
      setShowMetro(true);
    } else {
      setShowMetro(false);
      setFormData((prevData) => ({ ...prevData, metro: '' }));
    }
  };

  // Обработка отправки формы
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
      await axios.post('http://localhost:3001/api/apartments/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Квартира успешно добавлена!');
    } catch (error) {
      console.error('Ошибка при добавлении квартиры:', error);
      alert('Произошла ошибка, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Добавить квартиру</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Поле ввода города */}
        <label className={styles.label}>
          Город:
          <Autocomplete
            apiKey={googleMapsApiKey}
            onPlaceSelected={handleCitySelect}
            options={{
              types: ['(cities)'], // Ограничение результата только городами
              componentRestrictions: { country: 'ua' }, // Ограничение по стране (Украина)
            }}
            placeholder="Введите город"
            className={styles.inputCity}
          />
        </label>

        {/* Поле ввода района */}
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

        {/* Поле метро (только если выбран Киев или Харьков) */}
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
            />
          </label>
        )}

        {/* Поле описания */}
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

        {/* Поле цены */}
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

        {/* Поле загрузки фотографий */}
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

        {/* Кнопка отправки */}
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Добавление...' : 'Добавить'}
        </button>
      </form>
    </div>
  );
};

export default AddApartment;
