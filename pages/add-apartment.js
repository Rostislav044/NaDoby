


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

//     // Проверка, если выбран Киев или Харьков, показываем поле метро
//     const city = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

//     if (isKyiv || isKharkiv) {
//       setShowMetro(true);
//     } else {
//       setShowMetro(false);
//       setFormData((prevData) => ({ ...prevData, metro: '' }));
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
//             className={styles.inputCity}
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

//         {/* Поле метро (только если выбран Киев или Харьков) */}
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

//     // Проверка, если выбран Киев или Харьков, показываем поле метро
//     const city = formattedAddress.toLowerCase();
//     const isKyiv = ['киев', 'київ', 'kyiv'].some((name) => city.includes(name));
//     const isKharkiv = ['харьков', 'харків', 'kharkiv'].some((name) => city.includes(name));

//     if (isKyiv || isKharkiv) {
//       setShowMetro(true);
//     } else {
//       setShowMetro(false);
//       setFormData((prevData) => ({ ...prevData, metro: '' }));
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
//       const response = await axios.post('http://localhost:3001/api/apartments/add', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Квартира успешно добавлена!');
      
//       // Отправляем событие для обновления NewRealty
//       window.dispatchEvent(new Event('apartmentAdded'));

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
//             className={styles.inputCity}
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

//         {/* Поле метро (только если выбран Киев или Харьков) */}
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
import styles from '@/app/styles/Add-apartment.module.scss';

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

  const handleCitySelect = (place) => {
    const formattedAddress = place?.formatted_address || '';
    setFormData((prevData) => ({
      ...prevData,
      city: formattedAddress,
    }));

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
// Отправляем событие с новой квартирой
console.log('Отправка события apartmentAdded:', response.data);
window.dispatchEvent(new CustomEvent('apartmentAdded', { detail: response.data }));

      // Отправляем событие с данными о новой квартире
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
      <h1>Добавить квартиру</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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

        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Добавление...' : 'Добавить'}
        </button>
      </form>
    </div>
  );
};

export default AddApartment;
