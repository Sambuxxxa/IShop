import React, {useState} from "react";

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {

  const [isVisibleLogIn, setIsVisibleLogIn] = useState(true);
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(false);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const authData = {
    isVisibleLogIn,
    setIsVisibleLogIn,
    isVisibleSignIn,
    setIsVisibleSignIn,
    password,
    setPassword,
    email,
    setEmail,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
}


