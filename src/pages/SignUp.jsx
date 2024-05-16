import { useState } from "react";
import { Link } from "react-router-dom";
import { data } from  "../assets/userTemplate.json"

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación de los campos
    if (!username) {
      setUsernameError("Por favor ingresa tu nombre de usuario");
      return;
    }
    if (!email) {
      setEmailError("Por favor ingresa tu correo electrónico");
      return;
    }
    if (!password) {
      setPasswordError("Por favor ingresa tu contraseña");
      return;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Por favor confirma tu contraseña");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Las contraseñas no coinciden");
      return;
    }

    try {
      localStorage.setItem("user", JSON.stringify({
        info: {
          username: username,
          email: email,
          password: password,
        },
        data: data
      }));
      localStorage.setItem("isUserLoged", true);
      window.location = '/'
      /*const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }), // Agregar email al cuerpo de la solicitud
      });
      if (response.ok) {
        // Registro exitoso
        // Manejar la respuesta del servidor
      } else {
        // Registro fallido
        setError("Error al registrar usuario");
      }*/
    } catch (error) {
      setError("Error de red al registrar usuario");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 to-blue-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-70 p-10 rounded-md shadow-lg shadow-gray-700"
      >
        <h1 className="border-b-2 border-gray-500 w-[80%] text-center uppercase">
          Registro de Usuario
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {passwordError && <div className="text-red-500">{passwordError}</div>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500"
        />
        {confirmPasswordError && <div className="text-red-500">{confirmPasswordError}</div>}

        <input
          type="submit"
          value="Sign Up"
          className="cursor-pointer px-5 py-2 bg-blue-300 hover:bg-blue-400 rounded-lg hover:shadow-md hover:shadow-black transition-all duration-500"
        />

        <Link
          to="/login"
          className="hover:text-gray-500 transition-all duration-500 text-blue-900"
        >
          Volver
        </Link>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
}
