import { useState, useEffect } from "react";
import Article from "../components/article/Article";
import "./Home.css";

export default function Home() {
  const [isInViewport1, setIsInViewport1] = useState(false);
  const [isInViewport2, setIsInViewport2] = useState(false);
  const [isInViewport3, setIsInViewport3] = useState(false);
  const isUserLoged = JSON.parse(localStorage.getItem('isUserLoged'));

  if(JSON.parse(localStorage.getItem('user')) === null || JSON.parse(localStorage.getItem('isUserLoged')) == false){
    window.location = '/login';
  }

  useEffect(() => {
    if(!isUserLoged) {
      window.location = '/login'
    }
    const handleScroll = () => {
      const articles = document.querySelectorAll(".article");

      articles.forEach((article) => {
        const rect = article.getBoundingClientRect();
        const centerY = window.innerHeight / 2;

        if (rect.top < centerY && rect.bottom > centerY) {
          const articleId = article.getAttribute("id");
          switch (articleId) {
            case "Fitness":
              setIsInViewport1(true);
              break;
            case "Finanzas":
              setIsInViewport2(true);
              break;
            case "Filosofía":
              setIsInViewport3(true);
              break;
            default:
              break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isUserLoged]);

  return (
    <>
      <div className="w-full h-[100vh] imagenesLoop">
        <div className="w-full h-full pt-32 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md p-10">
          <p className="p-10 bg-blue-800 text-white text-xl rounded-lg">
            Esto es Glow Up la app donde lograrás llegar a otro nivel físico,
            mental y económico
          </p>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center gap-2 pb-16">
        <Article
          title="Fitness"
          title2="Contenido"
          contentText="Aquí podrás planear tu semana con rutinas creadas por un experto en el ámbito. Támbien está la opción de generar un plan semanal aleatorio (Ejercicios funcionales, con máquinas o peso libre)."
          imgSrc="/src/assets/fitness-portada.png"
          buttonText="Ir a mis rutinas"
          isInViewport={isInViewport1 ? "slide-in-left lg:mr-16" : "invisible"}
        />
        <Article
          title="Finanzas"
          title2="Contenido"
          contentText="Si quieres tener una base sobre las finanzas este es va a ser tu apartado favorito ya que contiene las bases más primordiales de la economía y de las finanzas."
          imgSrc="/src/assets/finanzas-portada.png"
          buttonText="Aprender finanzas"
          isInViewport={isInViewport2 ? "slide-in-right lg:ml-16" : "invisible"}
        />
        <Article
          title="Filosofía"
          title2="Contenido"
          contentText="Este es el sitio en el que cualquier persona que le gusta aprender algo nuevo todos los días le gustaría estar."
          imgSrc="/src/assets/filosofía-portada.png"
          buttonText="Ir"
          isInViewport={isInViewport3 ? "slide-in-left lg:mr-16" : "invisible"}
        />
      </main>
    </>
  );
}
