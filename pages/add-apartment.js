
// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from "@/app/styles/Add-apartment.module.scss"
// const AddApartment = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     district: '',
//     metro: '',
//     hasMetro: false,
//     description: '',
//     price: '', // Добавлено поле для цены
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
//       <form onSubmit={handleSubmit}>
//         <label>
//           Город:
//           <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//         </label>
//         <label>
//           Район:
//           <input type="text" name="district" value={formData.district} onChange={handleChange} required />
//         </label>
//         <label>
//           Метро:
//           <input type="text" name="metro" value={formData.metro} onChange={handleChange} />
//         </label>
//         <label>
//           Есть метро:
//           <input type="checkbox" name="hasMetro" checked={formData.hasMetro} onChange={handleChange} />
//         </label>
//         <label>
//           Описание:
//           <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
//         </label>
//         <label>
//           Цена:
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             min="0"
//             placeholder="Введите цену"
//           />
//         </label>
//         <label>
//           Фотографии:
//           <input type="file" multiple onChange={handleFileChange} accept="image/*" required />
//         </label>
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Добавление...' : 'Добавить'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddApartment;


import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/app/styles/Add-apartment.module.scss'; // Импорт стилей

const AddApartment = () => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    metro: '',
    hasMetro: false,
    description: '',
    price: '',
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setPhotos(e.target.files);
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
          <input className={styles.input} type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Район:
          <input className={styles.input} type="text" name="district" value={formData.district} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Метро:
          <input className={styles.input} type="text" name="metro" value={formData.metro} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Есть метро:
          <input className={styles.input} type="checkbox" name="hasMetro" checked={formData.hasMetro} onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Описание:
          <textarea className={styles.textarea} name="description" value={formData.description} onChange={handleChange} required></textarea>
        </label>
        <label className={styles.label}>
          Цена:
          <input
            className={styles.input}
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            placeholder="Введите цену"
          />
        </label>
        <label className={styles.label}>
          Фотографии:
          <input className={styles.input} type="file" multiple onChange={handleFileChange} accept="image/*" required />
        </label>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Добавление...' : 'Добавить'}
        </button>
      </form>
    </div>
  );
};

export default AddApartment;
