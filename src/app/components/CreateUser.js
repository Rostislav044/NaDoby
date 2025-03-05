
"use client"; 
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateUser = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const token = "ТВОЙ_ТОКЕН"; // Добавь токен администратора
      const response = await axios.post("http://localhost:3000/api/v1/users", data, {
        headers: {
        //   Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setMessage("Пользователь успешно создан!");
      reset();
    } catch (error) {
      setMessage(error.response?.data?.message || "Ошибка при создании пользователя");
    }
  };

  return (
    <div>
      <h2>Создать пользователя</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <input {...register("name", { required: "Введите имя" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register("email", { required: "Введите email" })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Пароль:</label>
          <input type="password" {...register("password", { required: "Введите пароль", minLength: 6 })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>Роль:</label>
          <select {...register("role")}>
            <option value="user">Пользователь</option>
            <option value="admin">Администратор</option>
          </select>
        </div>

        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreateUser;
