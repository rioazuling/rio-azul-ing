import Image from "next/image";
import NextLink from "next/link";

import logoFooter from "../public/logo-footer.png";
import email from "../public/email.png";
import wsp from "../public/wsp.png";
import contactanos from "../public/contactanosFooter.png";
import seguinos from "../public/seguinos.png";
import igFt from "../public/igFt.png";
import fb from "../public/fb.png";
import ytFt from "../public/ytFt.png";
import linkFt from "../public/linkFt.png";
import distincion from "../public/distincion.png";

const ExternalLink = ({href, children}: any) => (
  <a
    className="text-white hover:text-gray-600 transition"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex bg-blue-200 w-full mt-4">
      <div className="flex flex-col gap-8 lg:flex-row max-w-5xl w-full my-8 items-center justify-center mx-auto">
        <NextLink href={"/"}>
          <div>
            <Image alt="logo-footer" className="h-10 w-32 sm:h-16 sm:w-52" src={logoFooter} />
          </div>
        </NextLink>

        <div className="flex flex-row  gap-8 lg:gap-0 items-center">
          <div className="flex font-semibold flex-col gap-4 sm:gap-0 sm:flex-row">
            <div className="flex flex-row text-white rounded-xl text-center gap-2 items-center h-fit">
              <Image alt="contactanos" className="h-3 w-3" src={contactanos} />
              <p className="text-sm">Contactanos</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="ml-0 sm:ml-5 flex flex-row bg-white px-2 rounded-xl py-0.5 text-center gap-1 items-center w-32">
                <Image alt="email" className="h-3 w-4" src={wsp} />
                <a
                  className="text-sm dark:text-black"
                  href="https://wa.me/+3815420555?text=hola"
                  rel="noreferrer"
                  target="_blank"
                >
                  381-5420555
                </a>
              </div>

              <div className="ml-0 sm:ml-5 flex flex-row bg-white px-2 py-1 rounded-xl text-center gap-1 items-center">
                <Image alt="email" className="h-3 w-4" src={email} />
                <a className="text-sm dark:text-black" href="mailto:rioazul@rioazul.com.ar">
                  rioazul@rioazul.com.ar
                </a>
              </div>
            </div>
          </div>

          <div className="flex font-semibold gap-4 flex-col sm:flex-row">
            <div className="flex flex-row text-white px-0 rounded-xl text-center gap-2 items-center h-fit">
              <Image alt="seguinos" className="h-4 w-4" src={seguinos} />
              <p className="text-sm">Seguinos</p>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              <ExternalLink href="https://www.instagram.com/rioazuling/?hl=es">
                <Image alt="igFt" className="h-6 w-6" src={igFt} />
              </ExternalLink>
              <ExternalLink href="https://www.facebook.com/rioazuling/">
                <Image alt="fb" className="h-6 w-6" src={fb} />
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/@rioazuling4635">
                <Image alt="ytft" className="h-5 w-7" src={ytFt} />
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/@rioazuling4635">
                <Image alt="linkFt" className="h-6 w-6" src={linkFt} />
              </ExternalLink>
            </div>
          </div>
        </div>

        <div>
          <Image alt="distincion" className="h-16 sm:h-24 w-24 sm:w-36" src={distincion} />
        </div>
      </div>
    </footer>
  );
}
