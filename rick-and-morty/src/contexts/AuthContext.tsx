import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthenticationContextType {
  isUserLoggedIn: boolean;
  performLogin: () => void;
  performLogout: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(
  undefined
);

interface AuthenticationProviderProps {
  children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const performLogin = () => setUserLoggedIn(true);
  const performLogout = () => setUserLoggedIn(false);

  return (
    <AuthenticationContext.Provider
      value={{ isUserLoggedIn, performLogin, performLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = (): AuthenticationContextType => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('useAuthentication must be used within an AuthenticationProvider');
  }
  return context;
};
