// context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State để lưu thông tin người dùng

  const login = (userData) => {
    setUser(userData); // Cập nhật thông tin người dùng khi đăng nhập
  };

  const logout = () => {
    setUser(null); // Đăng xuất người dùng
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
