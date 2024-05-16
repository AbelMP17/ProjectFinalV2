import { useEffect, useState } from "react";
import Burbuja from "../components/finanzas/Burbuja";

export default function Finances() {
  const [showHelp, setShowHelp] = useState(false);
  const [conceptos, setConceptos] = useState(
    JSON.parse(localStorage.getItem("user")).data.finanzas
  );

  const handleConceptoVisto = (concepto) => {
    setConceptos(
      conceptos.map((con) => {
        if (con.name === concepto) {
          return { ...con, visto: true };
        }
        return con;
      })
    );
  };
  

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    user.data.finanzas = conceptos;

    conceptos.filter((concepto) => {
      Object.keys(concepto);
    });

    localStorage.setItem("user", JSON.stringify(user));
  }, [conceptos]);

  if(JSON.parse(localStorage.getItem('user')) === null || JSON.parse(localStorage.getItem('isUserLoged')) == false){
    window.location = '/login';
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
        {conceptos.map((concepto) => {
          return (
            <Burbuja
              key={concepto.name}
              concepto={concepto}
              handleConceptoVisto={handleConceptoVisto}
            />
          );
        })}
      </div>
      <button
        className="fixed bottom-10 right-10 p-5 bg-yellow-200 backdrop-blur-sm bg-opacity-75 rounded-full hover:scale-110 hover:bg-opacity-100 hover:shadow-md hover:shadow-black transition-all duration-500"
        onClick={handleShowHelp}
      >
        <img
          src="/src/assets/signo-de-interrogacion.png"
          alt="helpButton"
          title="Ayuda"
          className="w-[30px]"
        />
      </button>
      {showHelp && (
        <div className="fixed inset-0 flex items-center w-full justify-center bg-black bg-opacity-65 backdrop-blur-md z-50">
          <div className="flex flex-col bg-white px-14 rounded-md w-[80%] md:w-[60%] items-center justify-center">
            <h2 className="p-5 border-b-2 w-full text-center mb-5 text-lg">
              Ayuda para aplicar en aprendizaje
            </h2>
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                Para poder aplicar todos los conceptos a tu vida debes ser
                plenamente consciente de tus limitaciones econónicas.
              </li>
              <li>
                Si quieres aprender toma nota de cada concepto he intenta hacer
                un plan con cada cosa que aprendas.
              </li>
              <li>Dentente y tomate tu tiempo en cada concepto.</li>
            </ol>
            <button
              className="py-3 px-5 my-5 bg-blue-300 hover:opacity-65 transition-all duration-500 rounded-md"
              onClick={handleShowHelp}
            >
              Okey!!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
