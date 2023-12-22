import "../Header.css";
import { FaSnapchat } from "react-icons/fa6";
import { VscVersions } from "react-icons/vsc";
import { VscPlay } from "react-icons/vsc";
import { BsChatRight } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { TbMapPin } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
// import { BsLaptop } from "react-icons/bs";
// import { FaPerson } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex w-full items-center header  ">
      {/* Cuadro principal del header */}
      <div>
        <div className="flex  items-center text-center">
          <div className=" flex items-center text-center h-20px w-20px ">
            <div className="flex h-16 w-16 p-4 pl-6   items-center justify-center ">
              <FaSnapchat className="text-2xl" />
            </div>
          </div>
          <div className="flex w-full items-center text-center relative ml-2 ">
            <input
              type="text"
              placeholder="Buscar"
              className="rounded-full h-10 w-48 text-center text-sm font-semibold"
            />
            <div className="absolute ml-2">
              <CgSearch className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-52 mr-20">
        <nav className=" ">
          <ul className="flex items-center w-full ">
            <li>
              <div className="botones">
                <VscVersions className="text-2xl" />
                <span className="flex-end">Historias</span>
              </div>
            </li>
            <div className=" botones">
              <VscPlay className="text-2xl" />
              <span>Spolight</span>
            </div>
            <div className=" botones">
              <BsChatRight className="text-2xl" />
              <span>Chat</span>
            </div>
            <div className=" botones">
              <WiStars className="text-2xl" />
              <span>Lentes</span>
            </div>
            <div className=" botones">
              <TbMapPin className="text-2xl" />
              <span>Mapa</span>
            </div>
          </ul>
        </nav>
      </div>
      <div className="flex items-center ml-10">
        <nav className="">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <CgMenuGridO className="text-2xl " />
          </div>
        </nav>
        <div className="boton-negro text-center text-sm w-46 ml-5 font-semibold ">
          Anuncios de Snapchat
        </div>
        <div className="boton-negro w-24 text-center text-sm ml-3 mr-12 font-semibold ">
          Descargar
        </div>
      </div>
    </header>
  );
};

export default Header;
