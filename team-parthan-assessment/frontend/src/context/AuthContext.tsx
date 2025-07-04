// REMOVED CODE
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// interface User {
//   id: string;
//   token: string;
// }

// interface AuthContextType {
//   user: User | null;
//   userlogin: (userData: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>(null!);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // Initialize auth state from localStorage on app load
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const userlogin = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData)); // Persist user data
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user'); // Clear storage
//   };

//   return (
//     <AuthContext.Provider value={{ user, userlogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);