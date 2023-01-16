//import Head from "next/head";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import NextLink from "next/link";
import cn from "classnames";
import Image from "next/image";

//import Footer from './components/Footer';
//import Footer from "./Footer";

import logo from "../public/logo.png";
import yt from "../public/ytFt.png";
import ig from "../public/igFt.png";
import fb from "../public/fb.png";
import link from "../public/linkFt.png";

import MobileMenu from "./MobileMenu";

function NavItem({href, text}: any) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      className={cn(
        isActive ? "font-semibold text-white" : "font-normal text-gray-400 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 transition-all",
      )}
      href={href}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}
// className="text-white hover:text-gray-600 transition"

const ExternalLink = ({href, children}: any) => {
  return (
    <a
      // className={cn(
      //   isActive ? "font-semibold text-white" : "font-normal text-gray-400 dark:text-gray-400",
      //   "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 transition-all",
      // )}
      className="invisible sm:visible text-white hover:text-gray-600 transition"
      // className="text-white hover:text-gray-600 transition"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);
  const {resolvedTheme, setTheme} = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const {children} = props;
  // const {children, ...customMeta} = props;
  //const router = useRouter();
  // const meta = {
  //   title: "Guillermo Uzner - Developer.",
  //   description: `Front-end developer, JavaScript enthusiast.`,
  //   image: "https://guillermouzner.com/guille.jpg",
  //   type: "website",
  //   ...customMeta,
  // };

  return (
    <div className=" bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-8 bg-blue-50">
        <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-4 sm:pt-8 pb-4 sm:pb-4  text-gray-900  bg-opacity-60 dark:text-gray-100">
          <a className="skip-nav" href="#skip">
            Ir al contenido principal
          </a>
          <div className="flex">
            <MobileMenu />
            <NextLink className="hidden md:inline-block transition-all" href="/">
              <Image alt="home" className="h-auto w-32" src={logo} />
            </NextLink>

            <div className="hidden md:flex gap-6 items-center px-6">
              <ExternalLink
                className="hidden md:inline-block transition-all"
                href="https://www.youtube.com/@rioazuling4635"
              >
                <Image alt="home" className="h-auto w-7" src={yt} />
              </ExternalLink>
              <ExternalLink
                className="hidden md:inline-block transition-all"
                href="https://www.instagram.com/rioazuling/?hl=es"
              >
                <Image alt="home" className="h-auto w-6" src={ig} />
              </ExternalLink>
              <ExternalLink
                className="hidden md:inline-block transition-all"
                href="https://www.facebook.com/rioazuling/"
              >
                <Image alt="home" className="h-auto w-6" src={fb} />
              </ExternalLink>
              <ExternalLink
                className="hidden md:inline-block transition-all"
                href="https://www.linkedin.com/company/rioazuling/"
              >
                <Image alt="home" className="h-auto w-6" src={link} />
              </ExternalLink>
            </div>

            <NavItem href="/" text="Inicio" />
            <NavItem href="/obras" text="Nuestras Obras" />
            <NavItem href="/contacto" text="Contacto" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            className="w-9 h-9  rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300  transition-all"
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                className="w-5 h-5  sm:text-gray-200 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <path
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900" id="skip">
        {children}
        {/*<Footer />*/}
      </main>
    </div>
  );
}
