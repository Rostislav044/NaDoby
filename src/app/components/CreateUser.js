// "use client";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { 
//   TextField, 
//   Button, 
//   Select, 
//   MenuItem, 
//   FormControl, 
//   InputLabel, 
//   Box, 
//   Typography,
//   Alert
// } from "@mui/material";

// const CreateUser = () => {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [message, setMessage] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDEzZTdkNzkxOWNhZGYxOGFiMjQyNyIsImlhdCI6MTc0MTc2NzQxNCwiZXhwIjoxNzQ0MzU5NDE0fQ.WUTnDGT_Ow74dXeMpwm1i73oRZI_5Xhte3EMUlvlzEI"; // Додай токен адміністратора
      
//       const response = await axios.post("http://localhost:3000/api/v1/users", data, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}` // Додаємо токен
//         },
//       });
  
//       setMessage("Користувач успішно створений!");
//       reset();
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Помилка при створенні користувача");
//     }
//   };

//   return (
//     <Box 
//       sx={{
//         maxWidth: 400, 
//         margin: "auto", 
//         padding: 3, 
//         boxShadow: 3, 
//         borderRadius: 2, 
//         backgroundColor: "white"
//       }}
//     >
//       <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
//         Створити користувача
//       </Typography>

//       {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Поле Ім'я */}
//         <TextField 
//           label="Ім'я"
//           fullWidth 
//           margin="normal"
//           {...register("name", { required: "Введіть ім'я" })}
//           error={!!errors.name}
//           helperText={errors.name?.message}
//         />

//         {/* Поле Email */}
//         <TextField 
//           label="Email"
//           type="email"
//           fullWidth 
//           margin="normal"
//           {...register("email", { required: "Введіть email" })}
//           error={!!errors.email}
//           helperText={errors.email?.message}
//         />

//         {/* Поле Пароль */}
//         <TextField 
//           label="Пароль"
//           type="password"
//           fullWidth 
//           margin="normal"
//           {...register("password", { required: "Введіть пароль", minLength: 6 })}
//           error={!!errors.password}
//           helperText={errors.password?.message}
//         />

        

//         {/* Кнопка */}
//         <Button 
//           type="submit"
//           variant="contained" 
//           color="primary" 
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Створити
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default CreateUser;


"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { 
  TextField, 
  Button, 
  Box, 
  Typography,
  Alert,
  Link
} from "@mui/material";

const AuthComponent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // Токен для авторизации
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDEzZTdkNzkxOWNhZGYxOGFiMjQyNyIsImlhdCI6MTc0MTc2NzQxNCwiZXhwIjoxNzQ0MzU5NDE0fQ.WUTnDGT_Ow74dXeMpwm1i73oRZI_5Xhte3EMUlvlzEI";

  const onSubmit = async (data) => {
    try {
      const endpoint = isLogin ? "/api/v1/login" : "/api/v1/register";
      const response = await axios.post(`http://localhost:3000${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Добавляем токен в заголовки
        },
      });

      // Проверка успешного ответа
      if (response.status === 200 || response.status === 201) {
        setMessage(isLogin ? "Вход выполнен успешно!" : "Регистрация прошла успешно!");
        reset();
      } else {
        setMessage("Произошла ошибка");
      }
    } catch (error) {
      // Обработка ошибок
      if (error.response) {
        setMessage(error.response.data.message || "Произошла ошибка");
      } else if (error.request) {
        setMessage("Сервер не отвечает. Проверьте подключение к сети.");
      } else {
        setMessage("Произошла ошибка при отправке запроса.");
      }
    }
  };

  return (
    <Box 
      sx={{
        maxWidth: 400, 
        margin: "auto", 
        padding: 3, 
        boxShadow: 3, 
        borderRadius: 2, 
        backgroundColor: "white"
      }}
    >
      <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
        Nadoby.com
      </Typography>
      <Typography variant="h6" component="h3" textAlign="center" gutterBottom>
        {isLogin ? "Войдите в свою учетную запись" : "Зарегистрируйтесь"}
      </Typography>

      {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <TextField 
            label="Имя"
            fullWidth 
            margin="normal"
            {...register("name", { required: "Введите имя" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}

        <TextField 
          label="Email"
          type="email"
          fullWidth 
          margin="normal"
          {...register("email", { required: "Введите email" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField 
          label="Пароль"
          type="password"
          fullWidth 
          margin="normal"
          {...register("password", { required: "Введите пароль", minLength: 6 })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button 
          type="submit"
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ mt: 2 }}
        >
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </Button>
      </form>

      <Typography textAlign="center" sx={{ mt: 2 }}>
        {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
        <Link 
          component="button" 
          variant="body2" 
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Зарегистрироваться" : "Войти"}
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthComponent;