import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationProvider";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}

export default ProtectedRoute;
