import "../Main.css";
import { BsLaptop } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";

const MenuPrincipal = () => {
  return (
    <>
      <div className="menuprincipal flex justify-center items-center w-full h-screen">
        <div className="menuleft w-4/12">
          <h2 className="text-6xl font-semibold w-96 mb-2">
            ¡Snapchat ahora está disponible en la web!
          </h2>
          <p className="text-2xl font-semibold w-10/12 mb-4">
            Chatea, snapea y haz videollamadas con tus amigos donde sea que
            estés.
          </p>
          <p className="text-2xl font-semibold w-10/12 mb-8">
            <span className="novedad bg-sky-500 text-white font-semibold  rounded-md">
              NOVEDAD
            </span>{" "}
            Envía mensajes a My AI, ¡tu chatbot de compañía personal!
          </p>
          <div className="flex flex-row justify-center items-center w-10/12">
            <div className="flex justify-center items-center bg-black px-4 py-2 rounded-3xl">
              <BsLaptop className="text-2xl text-gray-50 mr-1" />
              <p className="font-semibold text-gray-50 ml-1">
                Iniciar sesión en el chat
              </p>
            </div>
            <p className="text-black text-3xl mx-4">∘</p>
            <img
              className="w-28"
              src="/src/img/menuprincipal/microsoft.png"
              alt="logo de microsoft"
            />
          </div>
        </div>
        <div className="menuleft w-5/12">
          <img src="/src/img/menuprincipal/imagenPrincipal.png" alt="" />
        </div>
      </div>
      <div className="foot h-14 flex w-full justify-center items-center">
        <FaPerson className="colorYellow text-2xl mx-4" />
        <p className="text-white text-sm">
          ¿Eres un padre o una madre? Obtén información sobre lo que hacemos
          para garantizar{" "}
          <span className="colorYellow underline cursor-pointer">
            la seguridad de los Snapchatters.
          </span>
        </p>
      </div>
    </>
  );
};

export default MenuPrincipal;
