import { useEffect, useState } from "react";
import { useAuthentication } from "../context/AuthenticationProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("e@g.com");
  const [password, setPassword] = useState("1234");
  const { user, isAuth, login } = useAuthentication();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) return login(email, password);
  };

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  return (
    <div className="loginContainer" onSubmit={handleLogin}>
      <form className="form">
        <div className="formControl">
          <label htmlFor="cityName">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="cityName"
            id="cityName"
          />
        </div>
        <div className="formControl">
          <label htmlFor="country">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
            name="country"
            id="country"
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn--primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
