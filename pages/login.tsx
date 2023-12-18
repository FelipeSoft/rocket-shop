import { Navbar } from "@/components/NavBar";
import MainLayout from "@/layout/MainLayout";
import { Rocket } from "lucide-react";

const Product = () => {
  return (
    <div className="flex justify-between">
      <div
        className="shadow-2xl h-screen w-1/3 flex justify-center items-center bg-pink-200"
        style={{ backgroundImage: 'url("https://images-cdn.welcomesoftware.com/Zz0zZTliMjQ4MzhlNGExMWViYmJiMjFiZTI2ZWNmN2MzZA==")' }}
      >
        <div>
          <h1 className="flex text-black text-6xl mb-4">
            ROCKET <br /> SHOP! <Rocket className="h-24 ml-2" />
          </h1>
          <p className="text-black text-lg">Descobrindo novos estilos para você!</p>
        </div>
      </div>

      <div className="p-20 w-2/3 h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl mb-6 text-gray-800 font-semibold">Welcome to Rocket Shop!</h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600" htmlFor="email">
            E-mail
          </label>
          <input
            className="border-2 border-gray-300 p-2 w-full rounded-md"
            type="text"
            id="email"
            placeholder="davinci@domain.com"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-600" htmlFor="password">
            Senha
          </label>
          <input
            className="border-2 border-gray-300 p-2 w-full rounded-md"
            type="password"
            id="password"
            placeholder="joao12345"
          />
        </div>

        <button className="bg-pink-500 text-white p-2 rounded-md w-60 max-w-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300">
          LOGIN
        </button>

        <div className="flex mt-4">
          <p className="text-xs text-gray-500">Não registrado?</p>
          <p className="ml-1 text-xs text-blue-500 cursor-pointer">Crie sua conta aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
