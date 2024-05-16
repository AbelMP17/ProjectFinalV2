import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Linea({
  index,
  setted,
  rutina,
  addRutina,
  removeRutina,
  rutinasDisponibles,
}) {
  const [showRutina, setShowRutina] = useState(false);
  const [selectedRutinaIndex, setSelectedRutinaIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditName, setIsEditName] = useState(false);
  const [checked, setChecked] = useState(false);
  const [newName, setNewName] = useState(rutina.name);

  const handleCheckboxChange = () => {
    rutina.status = !checked;
    setChecked(!checked);
  };

  function handleAddRoutine() {
    setIsAdding(false);
    addRutina(selectedRutinaIndex, index);
  }

  function handleRemoveRoutine() {
    setShowRutina(false);
    removeRutina(index);
  }

  function handleEditName() {
    setIsEditName(!isEditName);
  }

  function hendleEditNameRutine(name) {
    if (name !== "") {
      rutina.name = name.trim();
      setNewName(rutina.name);
      setIsEditName(!isEditName);
    } else {
      alert("Please enter a valid name");
    }
  }

  const updateData = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    alert(newName);


    const updatedFitnessData = user.data.fitness.map((tipo) => {
      return {
        ...tipo,
        rutinas: tipo.rutinas.map((rut) => {
          if (rut === rutina) {
            return {
              ...rut,
              name: newName,
              status: checked,
            };
          }
          return rut;
        }),
      };
    });

    alert(JSON.stringify(updatedFitnessData));

    const updatedUser = {
      ...user,
      data: {
        ...user.data,
        fitness: updatedFitnessData,
      },
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  return (
    <div className="flex justify-center p-3 h-full bg-blue-200 rounded-b-md">
      {!setted && (
        <button
          className="rounded-full p-2 bg-white hover:shadow-inner hover:shadow-black transition-all duration-500 w-[55px] m-auto"
          onClick={() => setIsAdding(true)}
        >
          <img
            src="/src/assets/anadir.png"
            alt="Añadir"
            title="Añadir rutina"
            className="w-[40px]"
          />
        </button>
      )}
      {isAdding && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md z-50 w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center rounded-lg gap-5 bg-blue-300 p-10">
            <select
              className="p-4 rounded-lg w-[60%]"
              value={selectedRutinaIndex}
              onChange={(e) => setSelectedRutinaIndex(e.target.value)}
            >
              {rutinasDisponibles.map((rutina, index) => {
                return (
                  <option key={index} value={index}>
                    {rutina.name}
                  </option>
                );
              })}
            </select>
            <button
              className="p-2 rounded-md bg-blue-600 text-white hover:opacity-70 transition-all duration-500"
              onClick={handleAddRoutine}
            >
              Añadir Rutina
            </button>
            <button
              className="rounded-md p-4 bg-red-500 hover:opacity-70 transition-all duration-500"
              onClick={() => setIsAdding(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
      {setted && (
        <div className="flex md:flex-col gap-2 items-center">
          <button
            onClick={() => setShowRutina(true)}
            className="rounded-lg p-3 bg-blue-400 hover:shadow-inner hover:shadow-black transition-all duration-500 w-[60px]"
            title={rutina.name}
          >
            <img
              className="w-[40px]"
              src="/src/assets/ojo.png"
              alt="imagen ver"
              title={rutina.name}
            />
          </button>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={checked}
              onChange={() => {
                handleCheckboxChange();
                updateData();
              }}
            />
            <div
              className={`w-12 h-6 rounded-full ${
                checked ? "bg-blue-500" : "bg-gray-400"
              } 
                    relative transition-colors duration-300`}
            >
              <div
                className={`w-6 h-6 rounded-full shadow-md transform ${
                  checked ? "translate-x-6" : "translate-x-0"
                } 
                      bg-white border-2 border-gray-300 transition-transform duration-300`}
              />
            </div>
          </label>
        </div>
      )}
      {showRutina && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md z-40 flex items-center justify-center">
          <div
            className={`flex flex-col items-center justify-center p-5 bg-white rounded-lg w-[80%] md:w-[600px] h-[95%] overflow-auto ${
              rutina.name.toLowerCase().includes("fullbody")
                ? "pt-[550px]"
                : "pt-60"
            }`}
          >
            <h1 className="flex justify-center items-center gap-2 w-[90%] border-b-2 text-center text-lg p-2">
              <button
                className="p-2 bg-yellow-500 rounded-md hover:opacity-70 transition-all"
                onClick={handleEditName}
              >
                {isEditName ? (
                  <p className="px-2">X</p>
                ) : (
                  <img
                    src="/src/assets/editar.png"
                    alt="editar"
                    title="Editar"
                    className="w-[27px]"
                  />
                )}
              </button>
              <button
                className="p-2 bg-red-500 rounded-full hover:opacity-70 transition-all"
                onClick={handleRemoveRoutine}
              >
                <img
                  src="/src/assets/papelera.png"
                  alt="eliminar"
                  title="Eliminar"
                  className="w-[27px]"
                />
              </button>
              {isEditName ? (
                <div className="flex flex-grow justify-center items-center gap-2">
                  <input
                    type="text"
                    id="inputName"
                    placeholder={rutina.name}
                    className="w-[50%] bg-blue-200 focus:shadow-inner focus:shadow-black p-2 rounded-full transition-all text-center"
                  />
                  <button
                    className="bg-blue-500 p-2 hover:opacity-70 transition-all font-bold text-white rounded-full"
                    onClick={() => {
                      hendleEditNameRutine(
                        document.getElementById("inputName").value
                      );
                      updateData();
                    }}
                  >
                    <img
                      src="/src/assets/cheque.png"
                      alt="Hecho"
                      title="Hecho"
                      className="w-[27px]"
                    />
                  </button>
                </div>
              ) : (
                <p className="flex-grow">{rutina.name}</p>
              )}
              <button
                className="rounded-full px-4 py-2 bg-red-300 hover:opacity-70 transition-all duration-500"
                onClick={() => setShowRutina(false)}
              >
                X
              </button>
            </h1>
            <table className="m-5">
              <thead className="border-b-2">
                <tr>
                  <th className="p-3">Ejercicio</th>
                  <th className="border-l-2 p-3">Sets / Reps</th>
                  <th className="border-l-2 p-3">Video</th>
                </tr>
              </thead>
              <tbody>
                {rutina.ejercicios.map((ejercicio, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2">{ejercicio.nombre}</td>
                    <td className="p-2 border-l-2">{`${ejercicio.sets} / ${ejercicio.reps}`}</td>
                    <td className="p-2  border-l-2">
                      {ejercicio.video !== undefined &&
                      ejercicio.video.split(".")[1] === "mp4" ? (
                        <ReactPlayer
                          url={ejercicio.video}
                          controls
                          loop
                          width="150px"
                          height="100px"
                        />
                      ) : (
                        <img
                          src={ejercicio.video}
                          alt="img"
                          title="HowToDo"
                          className="w-[150px] h-[100px]"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
