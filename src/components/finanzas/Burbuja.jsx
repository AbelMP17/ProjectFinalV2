import { useState } from "react";
import "../../index.css";

export default function Burbuja({
  concepto,
  handleConceptoVisto,
}) {
  const [showPanel, setShowPanel] = useState(false);
  const [showNextArticle, setShowNextArticle] = useState(0);

  function handleNextArticle() {
    setShowNextArticle(showNextArticle + 1);
  }

  function handlePanel() {
    setShowPanel(!showPanel);
  }

  function handleMarcarVisto() {
    handleConceptoVisto(concepto.name);
    setShowPanel(false);
  }

  return (
    <>
      <button
        className={`flex items-center justify-center bg-blue-900 hover:bg-blue-800 w-[80%] h-[200px] p-10 hover:scale-105 hover:shadow-md hover:shadow-gray-400 hover:rounded-xl rounded-md transition-all duration-700 cursor-pointer text-xl text-white m-auto ${
          concepto.visto ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handlePanel}
        disabled={concepto.visto}
      >
        {concepto.name}
      </button>
      {showPanel && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-65 backdrop-blur-md z-40 flex items-center justify-center">
          <div className="p-10 bg-white rounded-md w-[90%] max-h-[90%] overflow-auto text-[15px]">
            <h2 className="flex items-center w-full p-5 border-b-2">
              <p className="text-lg flex-grow text-center">
                {concepto.name} <span>(Toma Nota)</span>
              </p>

              {!concepto.visto && (
                <button
                  className="p-3 bg-orange-400 text-white rounded-full cursor-pointer hover:bg-opacity-70 hover:transition-all duration-500"
                  onClick={handleMarcarVisto}
                >
                  <img
                    src="/src/assets/cheque.png"
                    alt="checked"
                    title="Visto"
                    className="w-[30px]"
                  />
                </button>
              )}
            </h2>
            <div className="flex flex-col gap-5 p-5 text-justify items-center m-auto">
              <article className="flex flex-col h-fit rounded-md bg-blue-300 p-5 hover:scale-105 transition-all duration-700 w-[95%] sm:w-[80%] z-40">
                <h3 className="p-2 bg-white text-center shadow-inner shadow-gray-500 rounded-md text-lg">
                  ¿Qué es?
                </h3>
                <p className="p-2">{concepto.descripcion}</p>
                {showNextArticle === 0 && (
                  <button
                    className="self-end px-8 bg-white rounded-md hover:shadow-inner hover:shadow-gray-700 text-[25px] transition-all"
                    onClick={handleNextArticle}
                  >
                    &rarr;
                  </button>
                )}
              </article>
              {showNextArticle >= 1 && (
                <article className="flex flex-col subarticle rounded-md bg-red-300 p-5 hover:scale-105 transition-all duration-700 w-[95%] sm:w-[80%] z-30 navbar-slide-in">
                  <h3 className="p-2 bg-white text-center shadow-inner shadow-gray-500 rounded-md text-lg">
                    ¿Cómo puedes aplicarlo?
                  </h3>
                  <p className="p-2">{concepto.howToApply}</p>
                  {showNextArticle === 1 && (
                    <button
                      className="self-end px-8 bg-white rounded-md hover:shadow-inner hover:shadow-gray-700 text-[25px] transition-all"
                      onClick={handleNextArticle}
                    >
                      &rarr;
                    </button>
                  )}
                </article>
              )}
              {showNextArticle >= 2 && (
                <article className="flex flex-col subarticle rounded-md bg-green-300 p-5 hover:scale-105 transition-all duration-700 w-[95%] sm:w-[80%] z-20 navbar-slide-in">
                  <h3 className="p-2 bg-white text-center shadow-inner shadow-gray-500 rounded-md text-lg">
                    ¿Plus de Saber?
                  </h3>
                  <div className="p-2 ">
                    {concepto.plusDeSaber.map((punto, i) => (
                      <p key={i} className="p-2 border-b-2">
                        <b>{i + 1}.</b> {punto}
                      </p>
                    ))}
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
