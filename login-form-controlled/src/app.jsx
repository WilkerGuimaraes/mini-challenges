import { login } from "./utils/utils";
import { useState } from "react";

import "./styles/app.styles.scss";

export function App() {
  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login form</h1>
        {/* Coloque aqui a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className="error-message"></div>
        <div className="row">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
        </div>

        <div className="row">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>

        <div className="button-box">
          <button type="button">Login</button>
        </div>
      </div>
    </div>
  );
}
