import React, { useState } from 'react';
import testUsers from './lib/users';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

function AuthProvider({ children } ) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const _validateToken = (token) => {
    try{
      // if token is valid, then we HAVE a user assgined to the validUser variable
      let validUser = jwt_decode(token);
      if(validUser) {
        setUser(validUser);
        setIsLoggedIn(true);
      }
    } catch(err) {
      setError(err);
    }
  }

  const login = (username, password) => {
    let user = testUser[username];
    if (user && user.password === password) {
      try {
        _validateToken(user.token);
      } catch(err) {
        setError(err);
      }
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  }

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
