import {useState} from "react";
import Image from "next/image";
import NextLink from "next/link";
import cn from "classnames";

import logo from "../public/logo.png";

const MobileMenu2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      // document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      // document.body.style.overflow = "hidden";
    }
  }

  return (
    <div className="w-full sm:hidden">
      <div className="flex flex-row gap-10 ">
        <button aria-label="Toggle menu" type="button" onClick={toggleMenu}>
          <span>
            {isMenuOpen ? (
              <CrossIcon data-hide={!isMenuOpen} />
            ) : (
              <MenuIcon data-hide={isMenuOpen} />
            )}
          </span>
        </button>
        <NextLink className="inline-block sm:hidden transition-all" href="/">
          <Image
            alt="home"
            className="h-auto w-32"
            src={logo}
            onClick={() => setIsMenuOpen(false)}
          />
        </NextLink>
      </div>

      {/* <ul className="absolute bg-purple-900 w-full z-10 duration-700 ease-in"> */}
      <ul
        className={cn(
          "absolute text-black dark:text-white bg-blue-50 h-max w-full z-10 duration-700 ease-in mt-4",
          isMenuOpen ? "left-0" : "left-[-110%]",
        )}
      >
        <li className="mt-3 px-2">
          <NextLink href={"/"} onClick={() => setIsMenuOpen(false)}>
            Inicio
          </NextLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <NextLink href={"/obras"} onClick={() => setIsMenuOpen(false)}>
            Nuestras Obras
          </NextLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <NextLink href={"/contacto"} onClick={() => setIsMenuOpen(false)}>
            Contacto
          </NextLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <ExternalLink href="https://www.youtube.com/@rioazuling4635">Youtube</ExternalLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <ExternalLink href="https://www.instagram.com/rioazuling/?hl=es">Instagram</ExternalLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <ExternalLink href="https://www.facebook.com/rioazuling/">Facebook</ExternalLink>
          <hr className="my-3" />
        </li>
        <li className="mt-3 px-2">
          <ExternalLink href="https://www.linkedin.com/company/rioazuling/">Linkedin</ExternalLink>
          <hr className="my-3" />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu2;

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 text-gray-900 dark:text-gray-100"
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 text-gray-900 dark:text-gray-100"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const ExternalLink = ({href, children}: any) => {
  return (
    <a
      // className={cn(
      //   isActive ? "font-semibold text-white" : "font-normal text-gray-400 dark:text-gray-400",
      //   "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 transition-all",
      // )}
      // className="text-white hover:text-gray-600 transition"
      // className="invisible sm:visible text-white hover:text-gray-600 transition"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
