




import React, { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

import styles from "@/app/styles/Login.styles.module.scss";

const Login = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleToggle = () => {
    setIsRegister((prev) => !prev);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      if (password !== confirmPassword) {
        setError("Паролі не співпадають.");
        return;
      }
      // register
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3001/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        setLoading(false);

        if (res.ok) {
          alert("Реєстрація пройшла успішно. Тепер ви можете увійти.");
          setIsRegister(false);
        } else {
          setError(data.message || "Помилка при реєстрації.");
        }
      } catch (error) {
        setLoading(false);
        setError("Помилка з'єднання з сервером.");
      }
    } else {
      try {
        setLoading(true);
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        setLoading(false);

        if (result.error) {
          setError(result.error);
        } else {
          alert("Вхід виконано успішно!");
          onClose();
        }
      } catch (error) {
        setLoading(false);
        setError("Помилка з'єднання з сервером.");
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.loginContainer} ref={loginRef}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src="/close.svg" alt="Закрити" width={24} height={24} />
        </button>
        <h1>NaDoby</h1>
        <h2>{isRegister ? "Зареєструйте свій обліковий запис" : "Увійдіть до свого облікового запису"}</h2>
        <p className={styles.toggleText} onClick={handleToggle}>
          {isRegister
            ? "Вже маєте обліковий запис? Увійти"
            : "Не маєте облікового запису? Зареєструватися"}
        </p>

        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={(e)=>{e.preventDefault ();console.log("test")}}> 
          <button onClick={() => signIn("google")} className={styles.googleButton}>
            <Image src="/logoGoogle.svg" alt="Google" width={20} height={20} />
            {isRegister ? " Google" : " Google"}
          </button>
          <h3>Або за допомогою електронної пошти та пароля</h3>
          <label>
            Адреса електронної пошти:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {isRegister && (
            <label>
              Підтвердження пароля:
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Загрузка..." : isRegister ? "Зареєструватися" : "Увійти"}
          </button>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Login;




