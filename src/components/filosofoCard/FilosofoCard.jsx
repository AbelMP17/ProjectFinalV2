import { useState } from "react";

export default function FilosofoCard({
  urlImg,
  name,
  filosofy,
  citas,
  filosofoName,
  handleCitaVista,
  citaYaVista,
}) {
  const [citaVisible, setCitaVisible] = useState(null);

  const mostrarCitaAleatoria = () => {
    const citasNoVistas = citas.filter(
      (cita, index) => !citaYaVista(filosofoName, index)
    );
    if (citasNoVistas.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * citasNoVistas.length);
    setCitaVisible(citasNoVistas[randomIndex]);
  };

  const cerrarPanel = () => {
    setCitaVisible(null);
    handleCitaVista(
      filosofoName,
      citas.findIndex((cita) => cita.cita === citaVisible.cita)
    );
  };

  const todasCitasVistas = citas.every((cita, index) =>
    citaYaVista(filosofoName, index)
  );

  return (
    <>
      <div
        className={`flex flex-col gap-2 bg-blue-900 hover:bg-blue-800 p-5 rounded-xl hover:shadow-md hover:shadow-black hover:scale-105 transition-all duration-500 w-[60%] sm:w-[90%] m-auto ${
          todasCitasVistas ? "opacity-50 pointer-events-none blur-[2px]" : ""
        }`}
      >
        <img
          src={urlImg}
          alt="imagen filosofo"
          className="rounded-lg max-h-[300px]"
        />
        <div className="flex flex-col text-center bg-[#77f] rounded-md shadow-inner shadow-gray-800 p-2">
          <p className="p-2 font-bold text-lg">{name}</p>
          <hr />
          <p className="p-2 font-bold">{filosofy}</p>
          <button
            onClick={mostrarCitaAleatoria}
            className="py-2 px-5 bg-blue-950 hover:bg-blue-800 rounded-md text-white transition-all font-bold"
            disabled={todasCitasVistas}
          >
            Ver cita
          </button>
        </div>
      </div>
      {citaVisible && (
        <div className="fixed inset-0 flex items-center w-full justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="flex flex-col gap-2 items-center justify-center bg-white p-8 rounded-lg w-[80%] md:w-[60%]">
            <h1 className="text-lg border-b-2 border-black w-[80%] text-center">
              {name}
            </h1>
            <img
              src={urlImg}
              alt="imagen filosofo"
              className="w-[50%] max-w-[200px] border-b-2 border-black rounded-md"
            />
            <p className="text-center italic w-[80%] px-1 py-16 bg-[#ffd084] rounded-lg text-xl">
              "{citaVisible.cita}"
            </p>
            <h2 className="font-bold text-[15px]">Significado</h2>
            <p className="text-center">{citaVisible.how_to_apply}</p>
            <button
              onClick={cerrarPanel}
              className="py-2 px-5 bg-green-500 hover:bg-green-700 rounded-md text-white transition-all font-bold self-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
