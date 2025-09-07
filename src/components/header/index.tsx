import { useEffect, useState } from "react";
import LogoLANACION from "../../assets/LogoLANACION.png";
import Text from "../text";
import SubHeader from "./components/sub-header";
import SearchIcon from "../../assets/IconSearch.png";
import MenuIcon from "../../assets/MenuIcon.png";
import Button from "../button";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // cuando el scroll es mayor a 100px (ejemplo)
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-100 w-full transform bg-white px-4 shadow transition-all duration-1000 xl:px-0 ${
        isFixed ? "fixed top-0 translate-y-0" : "sticky top-0 translate-y-0"
      }`}
    >
      <div
        className={`m-auto flex max-w-[925px] flex-row items-center justify-between py-3 pb-0 xl:pb-3`}
      >
        <div className="hidden flex-row items-center gap-6 xl:flex">
          <Button
            text="SECCIONES"
            icon={MenuIcon}
            onClick={() => console.log("Abrir secciones")}
          />
          <Button
            text="BUSCAR"
            icon={SearchIcon}
            onClick={() => console.log("Buscar")}
          />
        </div>

        <img
          className="h-max max-w-max"
          alt="logo-LANACION"
          src={LogoLANACION}
        />

        <div className="hidden flex-row items-center gap-6 xl:flex">
          <Button
            text="SUSCRIBETE"
            className="bg-yellow-500"
            onClick={() => console.log("Suscribete")}
          />
          <Button
            text="INGRESAR"
            isPrimary={false}
            colorText="lightBlue500"
            onClick={() => console.log("Ingresar")}
          />
        </div>

        <div className="p-4 xl:hidden">
          <a
            title="Enlace a página para suscribirse"
            href="https://suscripciones.lanacion.com.ar/suscribirme?callback=aHR0cHM6Ly93d3cubGFuYWNpb24uY29tLmFyLw=="
            target="_blank"
          >
            <Text color="lightBlue500" weight="bold">
              SUSCRIBETE
            </Text>
          </a>
        </div>
      </div>
      <SubHeader />
    </header>
  );
}
