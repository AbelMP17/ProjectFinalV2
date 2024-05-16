import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { data } from "../assets/userTemplate.json";

export default function Config() {
  const chartRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [porcentajeFitness, setporcentajeFitness] = useState(0);
  const [porcentajeFinanzas, setPorcentajeFinanzas] = useState(0);

  const [configOption, setConfigOption] = useState("miPerfil");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isChangingUsername, setIsChangingUsername] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPasswordModal(true);
  };

  const handleShowPassword = () => {
    if (currentPassword !== user.info.password) {
      setError("La contraseña actual es incorrecta");
      setShowPasswordModal(false);
      return;
    }
    setShowPassword(true);
    setShowPasswordModal(false);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleToggleUsernamePanel = () => {
    setIsChangingUsername(true);
    setIsChangingPassword(false);
    setIsDeletingAccount(false);
    setError("");
  };

  const handleTogglePasswordPanel = () => {
    setIsChangingPassword(true);
    setIsChangingUsername(false);
    setIsDeletingAccount(false);
    setError("");
  };

  const handleToggleDeleteAccount = () => {
    setIsDeletingAccount(true);
    setIsChangingPassword(false);
    setIsChangingUsername(false);
    setError("");
  };

  const handleChangePassword = () => {
    if (currentPassword !== user.info.password) {
      setError("La contraseña actual es incorrecta");
      return;
    }

    if (!newPassword) {
      setError("Por favor ingresa una nueva contraseña");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    user.info.password = newPassword;
    localStorage.setItem("user", JSON.stringify(user));

    setSuccessMessage("La contraseña ha sido actualizada con éxito");
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
    setError("");
  };

  const handleChangeUsername = () => {
    if (currentPassword !== user.info.password) {
      setError("La contraseña actual es incorrecta");
      return;
    }

    if (!newUsername) {
      setError("Por favor ingresa un nuevo nombre de usuario");
      return;
    }

    user.info.username = newUsername;
    localStorage.setItem("user", JSON.stringify(user));

    setSuccessMessage("El nombre de usuario ha sido actualizado con éxito");
    setNewUsername("");
    setCurrentPassword("");
    setError("");
  };

  const handleDeleteAccount = () => {
    if (currentPassword !== user.info.password) {
      setError("La contraseña actual es incorrecta");
      return;
    }

    localStorage.removeItem("user");
    localStorage.setItem("isUserLoged", false);
    window.location = "login";
  };

  const handleRestartUserData = () => {
    user.data = data;
    localStorage.setItem("user", JSON.stringify(user));
    setSuccessMessage("Datos del usuario reseteados con exito!!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    const rutinasUser = user.data.fitness;
    const conceptosUser = user.data.finanzas;

    const calcularPorcentajeRutinasCompletadas = (rutinas) => {
      const totalRutinas = rutinas.reduce(
        (acc, tipo) => acc + tipo.rutinas.length,
        0
      );

      const completadas = rutinas.reduce((acc, tipo) => {
        return (
          acc +
          tipo.rutinas.filter((rutina) => Object.keys(rutina).length > 0).length
        );
      }, 0);
      const porcentaje = (completadas / totalRutinas) * 100;

      return porcentaje;
    };

    setporcentajeFitness(calcularPorcentajeRutinasCompletadas(rutinasUser));

    // Función para calcular el porcentaje de conceptos vistos
    const calcularPorcentajeConceptos = (conceptos) => {
      // Contar el número total de conceptos
      const totalConceptos = conceptos.length;

      // Contar el número de conceptos vistos
      const vistos = conceptos.filter((concepto) => concepto.visto).length;

      // Calcular el porcentaje
      const porcentaje = (vistos / totalConceptos) * 100;

      return porcentaje;
    };

    setPorcentajeFinanzas(calcularPorcentajeConceptos(conceptosUser));
  }, [user.data.finanzas, user.data.fitness]);

  useEffect(() => {
    const data = {
      labels: ["Fitness", "Finanzas", "Filosofía"],
      datasets: [
        {
          axis: "y",
          label: "Progreso",
          data: [
            porcentajeFitness.toFixed(2),
            porcentajeFinanzas.toFixed(2),
            70,
          ],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (configOption === "miPerfil") {
      const ctx = document.getElementById("miCanvas").getContext("2d");
      chartRef.current = new Chart(ctx, config);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [configOption, porcentajeFinanzas, porcentajeFitness]);

  const downloadCSV = (index) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      user.data.fitness[index].rutinas
        .map((rutina) => {
          const nombreRutina = rutina.name;
          if (nombreRutina !== undefined) {
            const ejercicioRows = rutina.ejercicios
              .map((ejercicio) => {
                return `${ejercicio.nombre},${ejercicio.sets},${ejercicio.reps}`;
              }).join("\n");
            return `${nombreRutina}\n${"ejercicio, sets, reps"}\n${ejercicioRows}`;
          }
        })
        .join("\n\n\n\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rutinas.csv");
    document.body.appendChild(link);
    link.click();
  };

  if (
    JSON.parse(localStorage.getItem("user")) === null ||
    JSON.parse(localStorage.getItem("isUserLoged")) == false
  ) {
    window.location = "/login";
  }

  const handleActivateConcept = (concepto) => {
    const updatedConcepts = [...user.data.finanzas];
    updatedConcepts.map((con) => {
      if (con.name === concepto.name) con.visto = false;
    });
    setUser((prevUser) => ({
      ...prevUser,
      data: {
        ...prevUser.data,
        finanzas: updatedConcepts,
      },
    }));
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      <aside className="sticky left-0 flex flex-col md:w-[100%] md:max-w-[300px]  w-full md:min-h-[61.7vh] min-h-[10vh] items-center bg-blue-300 p-2 gap-2">
        <h1 className="w-[90%] text-center py-3 border-b-2 border-gray-500 text-lg">
          Configuración
        </h1>
        <div className="flex flex-wrap md:flex-col w-full flex-row justify-between px-10 md:px-0 gap-2">
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "miPerfil" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("miPerfil")}
          >
            Mi Perfil
          </button>
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "fitness" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("fitness")}
          >
            Fitness
          </button>
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "finanzas" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("finanzas")}
          >
            Finanzas
          </button>
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "filosofia" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("filosofia")}
          >
            Filosofía
          </button>
        </div>
      </aside>
      {configOption === "miPerfil" && (
        <div className="col-span-3 p-10 grid grid-cols-3 grid-rows-3 gap-5">
          <article
            className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2`}
          >
            <div className="flex flex-wrap gap-2 w-full">
              <h2 className="text-2xl col-span-2 text-center bg-blue-100 p-5 rounded-md flex items-center justify-center flex-grow">
                {user.info.username}
              </h2>
              <div className="grid grid-rows-2 gap-2 flex-grow">
                <p className="bg-blue-100 p-5 rounded-md flex items-center justify-center">
                  {user.info.email}
                </p>
                <div className="text-center bg-blue-100 p-5 rounded-md flex items-center">
                  <p className="flex-grow">
                    {showPassword
                      ? user.info.password
                      : "******"}
                  </p>
                  <button
                    className="rounded-md hover:bg-blue-200 p-1 transition-all duration-500"
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : handleTogglePasswordVisibility()
                    }
                  >
                    <img
                      src={`/src/assets/${
                        showPassword ? "nover.png" : "ojo.png"
                      }`}
                      alt={`${showPassword ? "ocultar" : "ver"}`}
                      title={`${showPassword ? "ocultar" : "ver"}`}
                      className="w-[20px]"
                    />
                  </button>
                  {showPasswordModal && (
                    <div className="fixed z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70 backdrop-blur-sm">
                      <div className="relative bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">
                          Confirmar Contraseña
                        </h2>
                        <input
                          type="password"
                          placeholder="Contraseña Actual"
                          value={currentPassword}
                          onChange={handleChangeCurrentPassword}
                          className="px-3 py-2 border border-gray-300 rounded-md mb-4"
                        />
                        <button
                          onClick={handleShowPassword}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600 transition-all duration-300"
                        >
                          Confirmar
                        </button>
                        <button
                          onClick={() => setShowPasswordModal(false)}
                          className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row-span-2 bg-blue-100 rounded-md grid grid-cols-2 grid-rows-3 gap-2 p-6 items-center justify-center">
              <button
                onClick={handleToggleUsernamePanel}
                className="p-5 bg-white rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cambiar Nombre de Usuario
              </button>
              <button
                onClick={handleTogglePasswordPanel}
                className="p-5 bg-white rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cambiar Contraseña
              </button>
              <button
                className="p-5 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500 col-span-2 bg-red-300"
                onClick={() => {
                  localStorage.setItem("isUserLoged", false);
                  window.location = "login";
                }}
              >
                Cerrar Sesión
              </button>
              <button
                className="p-5 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500 col-span-2 bg-red-200"
                onClick={() => {
                  handleToggleDeleteAccount();
                }}
              >
                Eliminar cuenta
              </button>
            </div>
          </article>
          {isDeletingAccount && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <button
                onClick={handleDeleteAccount}
                className="p-2 bg-red-300 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500"
              >
                Confirmar Eliminar Cuenta
              </button>
              <button
                onClick={() => setIsDeletingAccount(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}
          {isChangingUsername && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Nuevo Nombre de Usuario"
                  value={newUsername}
                  onChange={handleChangeUsername}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <div className="col-span-2 text-green-500">{successMessage}</div>
              <button
                onClick={handleChangeUsername}
                className="p-2 bg-orange-300 rounded-md hover:shadow-inner hover:shadow-orange-800 transition-all duration-500"
              >
                Cambiar Nombre de Usuario
              </button>
              <button
                onClick={() => setIsChangingUsername(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}

          {isChangingPassword && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Nueva Contraseña"
                  value={newPassword}
                  onChange={handleChangeNewPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Confirmar Nueva Contraseña"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <div className="col-span-2 text-green-500">{successMessage}</div>
              <button
                onClick={handleChangePassword}
                className="p-2 bg-orange-300 rounded-md hover:shadow-inner hover:shadow-orange-800 transition-all duration-500"
              >
                Cambiar Contraseña
              </button>
              <button
                onClick={() => setIsChangingPassword(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}

          <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 flex flex-col items-center gap-2">
            <h1 className="text-center border-b-2 border-gray-500 text-[15px] w-full">
              Progreso
            </h1>
            <div id="graficaProgreso" className="w-[80%] sm:w-[300px]">
              <canvas id="miCanvas"></canvas>
            </div>
            <button
              className="bg-red-300 p-2 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500"
              onClick={handleRestartUserData}
            >
              Resetear progreso
            </button>
            <div className="text-green-500">{successMessage}</div>
          </article>
        </div>
      )}
      {configOption === "fitness" && (
        <div className="col-span-3 p-10 grid grid-cols-3 gap-5">
          <article
            className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 col-span-3 grid grid-cols-1 grid-rows-3 gap-2`}
          >
            {user.data.fitness.map((rutina, i) => {
              return (
                <div
                  key={i}
                  className="bg-blue-100 rounded-md gap-2 p-6 flex flex-col items-center"
                >
                  <div className="flex w-[90%] text-center py-3 border-b-2 border-gray-500 text-lg">
                    <p className="flex-grow">{rutina.tipo}</p>
                    {rutina.rutinas.filter(
                      (rutina) => rutina.name !== undefined
                    ).length > 0 && (
                      <button
                        className="p-2 bg-white rounded-xl hover:shadow-inner hover:shadow-gray-400 transition-all duration-300"
                        onClick={() => downloadCSV(i)}
                      >
                        <img
                          src="/src/assets/descargas.png"
                          alt="descargar"
                          title="descargar"
                          className="w-[20px]"
                        />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 grid-rows-3 gap-3">
                    {rutina.rutinas.map((rutina, i) => {
                      return (
                        <p key={i} className="p-3">
                          {rutina.name === undefined
                            ? "empty day"
                            : i + 1 + ". " + rutina.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      )}
      {configOption === "finanzas" && (
        <div className="col-span-3 p-10 grid grid-cols-3 gap-5">
          {user.data.finanzas.filter((concepto) => concepto.visto === true)
            .length > 0 ? (
            user.data.finanzas
              .filter((concepto) => concepto.visto === true)
              .map((concepto, i) => {
                return (
                  <article
                    key={i}
                    className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 grid grid-cols-1 gap-2`}
                  >
                    <div className="bg-blue-100 rounded-md gap-2 p-6 flex flex-col items-center text-justify">
                      <div className="flex flex-wrap w-[90%] text-center py-3 border-b-2 border-gray-500 text-lg items-center">
                        <p className="flex-grow mr-2">{concepto.name}</p>
                        <div className="flex items-center justify-center m-auto">
                          <p className={`text-[15px] text-green-600`}>
                            {concepto.visto ? "Visto" : "No Visto"}
                          </p>
                          <button
                            className="bg-white p-2 ml-5 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-300"
                            onClick={() => handleActivateConcept(concepto)}
                          >
                            {" "}
                            activar{" "}
                          </button>
                        </div>
                      </div>
                      <div className="w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md justify-center items-center">
                        <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                          Descripción:
                        </p>
                        <p className="col-span-3 blur-sm select-none">
                          {concepto.descripcion}
                        </p>
                      </div>
                      <div className="justify-between w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md">
                        <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                          Cómo Aplicarlo:
                        </p>
                        <p className="col-span-3 blur-sm select-none">
                          {concepto.howToApply}
                        </p>
                      </div>
                      <div className="justify-between w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md">
                        <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                          Plus de Saber:
                        </p>
                        <ol className="ml-5 col-span-3 list-decimal blur-sm select-none">
                          {concepto.plusDeSaber.map((saber, j) => (
                            <li key={j}>{saber}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </article>
                );
              })
          ) : (
            <div className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 flex justify-center items-center text-xl font-bold min-h-[70vh]">
              No hay conceptos vistos
            </div>
          )}
        </div>
      )}
      {configOption === "filosofia" && (
        <div className="col-span-3 p-10 grid grid-cols-3 gap-5">
          <article
            className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 grid grid-cols-1 grid-rows-3 gap-2`}
          >
            <p>Configuración de Filosofía</p>
          </article>
        </div>
      )}
    </div>
  );
}
