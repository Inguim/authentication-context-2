import { createContext, useContext, useEffect, useState } from "react";
import randomString from "../utils/randomString";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setSigned(true);
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  function Logout() {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
    setUser(null);
    setSigned(false);
  }


  async function Login({ email, password }) {
    if(!account) {
      return "Acredito que você ainda não se cadastrou no sistema 😳";
    }

    if(account.email === email && account.password ===  password) {
      setUser({
        email: account.email,
        name: account.name
      });
      setSigned(true);
      
      localStorage.setItem('@App:user', JSON.stringify({ email: account.email, name: account.name }));
      localStorage.setItem('@App:token',  randomString(50));
    } else {
      return "Acho que você errou suas credencias 🙄";
    }
  }

  async function Register({ email, password, name }) {
    setAccount({
      email: email,
      password: password,
      name: name
    })
  }
  
  return (
    <AuthContext.Provider value={{ signed, user, setSigned, Login, Logout, Register }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext;


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}