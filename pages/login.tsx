import { Navbar } from "@/components/NavBar"
import MainLayout from "@/layout/MainLayout"


const product = () => {
    return (

        <div className="flex">
            <div className="p-20 w-1/2 h-screen flex flex-col items-center justify-center">
                <label className="pr-36" htmlFor="">E-mail</label>
                <input className="border-2 border-black p-2 mb-2" type="text" placeholder="davinci@domain.com" />
                <label className="pr-36" htmlFor="">Senha</label>
                <input className="border-2 border-black p-2 " type="password" placeholder="joao12345" />
                <button className="bg-pink-200 p-2 mt-6 w-48" >LOGIN</button>
                <button className="flex">
                    <p className="text-xs text-gray-400">Não registrado?</p>
                    <p className="ml-1 text-xs text-blue-400">Crie sua conta aqui</p>
                </button>
            </div>

            <div className="h-screen w-1/2 flex justify-center items-center bg-pink-200">
                <h1 className="text-blue-400 text-7xl">Welcome <br /> back!</h1>
            </div>

        </div>

    )
}

export default product