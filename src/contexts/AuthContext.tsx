import React, { createContext, useContext, useState, ReactNode } from 'react';

type Child = {
  id: string;
  name: string;
  birthDate: string;
  gender: 'male' | 'female';
  weight: number[];
  height: number[];
  weightDates: string[];
  heightDates: string[];
};

type User = {
  uid: string;
  name: string;
  email: string;
  children: Child[];
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  addChild: (child: Child) => void;
  updateChildData: (childId: string, weight?: number, height?: number) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addChild = (child: Child) => {
    if (user) {
      setUser({
        ...user,
        children: [...user.children, child]
      });
    }
  };

  const updateChildData = (childId: string, weight?: number, height?: number) => {
    if (user) {
      const updatedChildren = user.children.map(child => {
        if (child.id === childId) {
          const today = new Date().toISOString().split('T')[0];
          return {
            ...child,
            weight: weight ? [...child.weight, weight] : child.weight,
            height: height ? [...child.height, height] : child.height,
            weightDates: weight ? [...child.weightDates, today] : child.weightDates,
            heightDates: height ? [...child.heightDates, today] : child.heightDates,
          };
        }
        return child;
      });
      
      setUser({
        ...user,
        children: updatedChildren
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, addChild, updateChildData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
