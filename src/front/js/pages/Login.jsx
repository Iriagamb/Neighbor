import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css"; // Asegúrate de crear un archivo CSS personalizado

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actions.login(email, password, userType);
    // console.log(email, password, userType);
    // console.log("respuesta", response);
    if (response) {
      switch (userType) {
        case "NEIGHBOR":
          navigate(`/profileNeighbor/${response.user.id}`);
          return;
        case "SELLER":
          navigate(`/profileSeller/${response.user.id}`);
          return;
        case "ADMINISTRATOR":
          navigate(`/profileAdmin/${response.user.id}`);
          return;


      }
    }
    else {
      alert("Login failed");
    }

  };

  return (
    <div className="login-container" style={{ minHeight: '80vh' }}>
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <div className="user-type-group" onChange={(e) => setUserType(e.target.value)}>
          <label className="user-type-option text-dark">
            <input type="radio" name="options" value="NEIGHBOR" />
            Vecino
          </label>
          <label className="user-type-option text-dark">
            <input type="radio" name="options" value="SELLER" />
            Vendedor
          </label>
          <label className="user-type-option text-dark">
            <input type="radio" name="options" value="ADMINISTRATOR" />
            Administrador
          </label>
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="LoginEmail">Correo electrónico</label>
          <input
            type="email"
            id="LoginEmail"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className="text-dark" id="emailHelp">Nunca compartiremos tu correo con nadie.</small>
        </div>

        <div className="form-group">
          <label className="text-dark" htmlFor="LoginPassword">Contraseña</label>
          <input
            type="password"
            id="LoginPassword"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">
          Inicia sesión
        </button>
      </form>

      <div>
        <Link className="text-primary" to={"/register"}>¿No tienes una cuenta? Regístrate aquí!</Link>
      </div>
    </div>
  );
};

export default Login;