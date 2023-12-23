import "../main.css";
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
    <nav className="w-full h-16 pt-2 flex flex-row items-center header justify-between fixed">
      {" "}
      {/* Cuadro principal del header */}
      {/* Primer Div */}
      <div className="flex flex-row justify-center items-center ml-1 mr-20 ">
        <div className="flex items-center justify-center mx-6 cursor-pointer">
          <FaSnapchat className="text-2.2xl" />
        </div>
        <div className="flex w-full items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="pl-10 w-44 rounded-full py-2"
          />
          <div className="absolute ml-2">
            <CgSearch className="text-2xl" />
          </div>
        </div>
      </div>
      {/* Segundo Div */}
      <div className="flex flex-row justify-center items-center">
        <ul className="flex flex-row justify-center items-center">
          <li className="flex flex-col justify-center items-center mx-1 cursor-pointer color-bg w-16 h-16 rounded-md ">
            <VscVersions className="text-2xl mb-1" />
            <p className="text-enlace font-semibold">Historias</p>
          </li>
          <li className="flex flex-col justify-center items-center mx-1 cursor-pointer color-bg w-16 h-16 rounded-md">
            <VscPlay className="text-2xl mb-1" />
            <p className="text-enlace font-semibold ">Spolight</p>
          </li>
          <li className="flex flex-col justify-center items-center mx-1 cursor-pointer color-bg w-16 h-16 rounded-md">
            <span className="bg-sky-500 text-white nube-chat rounded-full py absolute top-2 cursor-pointer">
              NEW
            </span>
            <BsChatRight className="text-2xl mb-1" />
            <p className="text-enlace font-semibold ">Chat</p>
          </li>
          <li className="flex flex-col justify-center items-center mx-1 cursor-pointer color-bg w-16 h-16 rounded-md">
            <WiStars className="text-2xl mb-1 border-2 border-black rounded-full" />
            <p className="text-enlace font-semibold ">Lentes</p>
          </li>
          <li className="flex flex-col justify-center items-center mx-1 cursor-pointer color-bg w-16 h-16 rounded-md">
            <TbMapPin className="text-2xl mb-1" />
            <p className="text-enlace font-semibold ">Mapa</p>
          </li>
        </ul>
      </div>
      {/* Tercer Div */}
      <div className="flex flex-row justify-center items-center mr-4">
        <div className="bg-white rounded-full p-2 mx-4 cursor-pointer hover:bg-gray-400">
          <CgMenuGridO className="text-2xl " />
        </div>
        <div className="text-white bg-gray-900 rounded-full px-4 py-1.5 mx-1.5 cursor-pointer">
          <p className="text-sm font-semibold">Anuncios de Snapchat</p>
        </div>
        <div className="text-white bg-gray-900 rounded-full px-4 py-1.5 mx-1.5 cursor-pointer">
          <p className="text-sm font-semibold">Descargar</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
