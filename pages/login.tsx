import { Navbar } from "@/components/NavBar"
import MainLayout from "@/layout/MainLayout"


const product = () => {
    return (
        <div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="bg-pink-200 p-32 shadow-2xl w-max">
                    <input className="p-2 mb-2" type="text" placeholder="username" /> <br />
                    <input className="p-2 " type="password" placeholder="password" />
                    <br />
                    <button className="bg-white p-2 mt-6 w-full" >LOGIN</button>
                    <br />
                    <button>
                        <p className="text-xs text-gray-400">Não registrado? Crie sua conta aqui</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default product