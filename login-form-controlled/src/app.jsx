import { login } from "./utils/utils";
import { useState } from "react";

import "./styles/app.styles.scss";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);

  function handleSubmit() {
    setErrors(null);
    setIsRequesting(true);

    const values = {
      email,
      password,
    };

    login(values)
      .then(() => alert("Login efetuado com sucesso."))
      .catch((error) => setErrors(error))
      .finally(() => setIsRequesting(false));
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login form</h1>

        {errors && <div className="error-message">{errors.message}</div>}

        <div className="row">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="row">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="button-box">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={email === "" || password.length < 6 || isRequesting}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
