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
    <header className="flex items-center w-full header  ">
      {/* Cuadro principal del header */}
      <div className="w-full flex items-center text-center p-4px h-72px w-72px">
        <div className=" flex items-center text-center ml-5 mr-9 ">
          <div className="">
          <FaSnapchat  className="text-2xl" />
          </div>
        </div>
        <div className="flex w-full items-center text-center relative rounded shadow-sm  ">
          <input type="text" placeholder="Buscar" className="input " />
          <div className="absolute ml-2">
            <CgSearch className="text-2xl" />
          </div>
        </div>
      </div>
      <nav className="w-full flex items-center">
        <ul className="flex items-center w-full ">
          <li>
            <div className="botones">
              <span>
                <VscVersions className="text-2xl" />
              </span>
              <span>Historias</span>
            </div>
          </li>
          <div className=" botones">
            <span>
              <VscPlay className="text-2xl" />
            </span>
            <span>Spolight</span>
          </div>
          <div className=" botones">
            <span>
              <BsChatRight className="text-2xl" />
            </span>
            <span>Chat</span>
          </div>
          <div className=" botones">
            <span>
              <WiStars className="text-2xl" />
            </span>
            <span>Lentes</span>
          </div>
          <div className=" botones">
            <span>
              <TbMapPin className="text-2xl" />
            </span>
            <span>Mapa</span>
          </div>
        </ul>
      </nav>
      <div className="tercer-div w-full">
        <nav className=" mr-14">
          <div>
            <CgMenuGridO className="text-3xl" />
          </div>
        </nav>
        <div className="boton-negro text-center ml-15 mr-3 ">
          Anuncios de Snapchat
        </div>
        <div className="boton-negro w-1/4 text-center ">Descargar</div>
      </div>
    </header>
  );
};

export default Header;
