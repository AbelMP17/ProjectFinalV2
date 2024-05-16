import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [toggleIconOpacity, setToggleIconOpacity] = useState("opacity-100");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHeaderSticky, setIsHeaderSticky] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbarToggle = () => {
    setIsNavbarVisible(!isNavbarVisible);
    setToggleIconOpacity(isNavbarVisible ? "opacity-100" : "opacity-70");
  };

  return (
    <header
      className={`${(location.pathname === '/login' || location.pathname === '/signup') && 'pointer-events-none bg-transparent pt-10'} p-5 flex ${location.pathname === '/' ? 'fixed' : 'sticky'} top-0 right-0 left-0 justify-center text-lg z-20 bg-blue-500 transition-all duration-700 ${
        !isHeaderSticky &&
        "bg-opacity-70 backdrop-blur-md rounded-t-xl lg:rounded-full lg:mx-20 lg:top-5"
      } ${isNavbarVisible && windowWidth < 1024 && "mb-[77px]"} ${
        isNavbarVisible && windowWidth < 520 && "mb-[154px]"
      }`}
    >
      <div className="flex items-center gap-5">
        <div
          value="logoButton"
          onClick={handleNavbarToggle}
          className="logo-slide-in p-0 z-40"
        >
          <Logo
            className={`hover:scale-105 transition-all bg-gray-900 cursor-pointer ${toggleIconOpacity} w-[100px] h-[100px] rounded-full`}
          />
        </div>
        {(windowWidth < 1024 || isNavbarVisible) && (
          <Navbar
            id="navbar"
            value="navbar"
            className={`${
              isNavbarVisible
                ? "navbar-slide-in"
                : "navbar-slide-out pointer-events-none"
            } transition-all z-30`}
          />
        )}
      </div>
    </header>
  );
}
