import { Link } from "react-router-dom";

export default function Article({
  title,
  contentText,
  imgSrc,
  buttonText,
  className,
  isInViewport,
}) {
  return (
    <article
      id={title}
      className={`flex flex-col lg:flex-row items-center justify-center bg-blue-700 mt-16 article w-[80%] lg:h-[75vh] hover:scale-110 rounded-lg ${isInViewport}`}
    >
      <div
        className={`flex items-center justify-center w-full sm:w-[50%] py-5 article-image`}
      >
        <img
          src={imgSrc}
          alt="articleImg"
          className="w-[50%] lg:w-[350px] m-auto rounded-lg"
        />
      </div>
      <div className="bg-white bg-opacity-70 flex flex-col items-center justify-between m-auto w-full px-3 py-3 lg:py-16 gap-3 lg:w-[50%] h-full rounded-lg article-content">
        <h1 className="px-10 py-5 bg-blue-800 text-center w-full rounded-lg text-white text-[25px]">
          {title}
        </h1>
        <p className="p-5 bg-white shadow-inner shadow-gray-800 text-[18px] rounded-md text-center">
          {contentText}
        </p>
        <Link
          to={`/${title.toLowerCase().replace("í", "i")}`}
          className="py-3 px-8 bg-[#1414d8] cursor-pointer uppercase font-bold hover:opacity-70 transition-all duration-500 rounded-full text-[16px] text-white"
        >
          {buttonText}
        </Link>
      </div>
    </article>
  );
}
