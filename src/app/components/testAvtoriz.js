
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, loadFromStorage } from '../store/authSlice';
import { useEffect } from 'react';

export default function Profile() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };
//ok//
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Привіт Ростислав,
             {/* {user.name}! */}
             </p>
          <button onClick={handleLogout}>Вийти</button>
        </>
      ) : (
        <p>Ви не авторизовані</p>
      )}
    </div>
  );
}
