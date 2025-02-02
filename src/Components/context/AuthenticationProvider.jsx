import { createContext, useContext, useReducer } from "react";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  isAuth: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAuth: true,
      };
    case "logout":
      return {
        user: null,
        isAuth: false,
      };
    default:
      throw new Error("Action is Unknown");
  }
};

const FAKE_USER = {
  name: "Mohammad",
  email: "e@g.com",
  password: "1234",
};

function AuthenticationProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(authReducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
