

// import React from "react";
// import { signIn } from "next-auth/react";
// import Image from "next/image";
// import styles from "@/app/styles/Login.styles.module.scss";

// const Login = ({ onClose }) => {
//   return (
//     <div className={styles.overlay}>
//       <div className={styles.loginContainer}>
//         <button className={styles.closeButton} onClick={onClose}>
//           <Image
//             src="/close.svg"
//             alt="Закрыть"
//             width={24}
//             height={24}
//           />
//         </button>
//         <h2>Вхід</h2>
//         <form>
//           <label>
//             Логін:
//             <input type="text" name="username" required />
//           </label>
//           <label>
//             Пароль:
//             <input type="password" name="password" required />
//           </label>
//           <button type="submit">Увійти</button>
//         </form>
//         <hr />
//         <button onClick={() => signIn('google')} className={styles.googleButton}>
//           <Image
//             src="/google.svg"
//             alt="Google"
//             width={20}
//             height={20}
//           />
//           Увійти через Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "@/app/styles/Login.styles.module.scss";

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false); // Состояние для переключения между входом и регистрацией

  const handleToggle = () => setIsRegister((prev) => !prev); // Функция для переключения между входом и регистрацией

  return (
    <div className={styles.overlay}>
      <div className={styles.loginContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image
            src="/close.svg"
            alt="Закрыть"
            width={24}
            height={24}
          />
        </button>
        <h2>{isRegister ? "Реєстрація" : "Вхід"}</h2>
        <form>
          <label>
            {isRegister ? "Ім'я користувача" : "Логін"}:
            <input type="text" name="username" required />
          </label>
          {isRegister && (
            <label>
              Електронна пошта:
              <input type="email" name="email" required />
            </label>
          )}
          <label>
            Пароль:
            <input type="password" name="password" required />
          </label>
          <button type="submit">{isRegister ? "Зареєструватися" : "Увійти"}</button>
        </form>
        <hr />
        <button onClick={() => signIn('google')} className={styles.googleButton}>
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          {isRegister ? "Зареєструватися через Google" : "Увійти через Google"}
        </button>
        <p className={styles.toggleText} onClick={handleToggle}>
          {isRegister ? "Вже маєте обліковий запис? Увійти" : "Не маєте облікового запису? Зареєструватися"}
        </p>
      </div>
    </div>
  );
};

export default Login;
