import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación de los campos
    if (!username) {
      setUsernameError("Por favor ingresa tu nombre de usuario");
      return;
    }
    if (!password) {
      setPasswordError("Por favor ingresa tu contraseña");
      return;
    }

    try {
      localStorage.setItem("isUserLoged", true);
      if (localStorage.getItem("user") !== null) {
        const user = JSON.parse(localStorage.getItem("user"))

        user.info.username = username;
        user.info.password = password;

        localStorage.setItem("user", JSON.stringify(user));

        window.location = "/";
      }else{
        setError('User not found');
      }
      /*const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // Autenticación exitosa
        // Manejar la respuesta del servidor (por ejemplo, almacenar el token de acceso)
      } else {
        // Autenticación fallida
        setError("Credenciales incorrectas");
      }*/
    } catch (error) {
      // Manejar errores de red
      setError("Error de red al iniciar sesión");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 to-blue-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-70 p-10 rounded-md shadow-lg shadow-gray-700"
      >
        <h1 className="border-b-2 border-gray-500 w-[80%] text-center uppercase">
          Inicio de Sesión
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {usernameError && <div className="text-red-500">{usernameError}</div>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {passwordError && <div className="text-red-500">{passwordError}</div>}

        <input
          type="submit"
          value="Login"
          className="cursor-pointer px-5 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg hover:shadow-md hover:shadow-black transition-all duration-500"
        />

        <Link
          to="/signup"
          className="hover:text-gray-500 transition-all duration-500 text-blue-900"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
}
