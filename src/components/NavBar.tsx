import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="py-4 flex flex-row justify-between items-center">
            <h1 className="text-2xl font-extrabold">
                Lorem Ipsum
            </h1>

            <div className="w-1/3 bg-gray-100 rounded-md px-4 py-3 flex items-center justify-between">
                <input className="bg-transparent outline-none" type="text" placeholder="Procure por produtos" />
                <button><Search /></button>
            </div>

            <div className="flex gap-6">
                <button className="relative flex justify-center items-center rounded-full text-black">
                    <ShoppingCart className="w-7 h-7" />
                    <span className=" -top-1 -right-2 absolute flex text-xs text-white justify-center items-center bg-green-900 w-4 h-4 rounded-full">0</span>
                </button>
                <button className="bg-black w-8 h-8 text-white rounded-full flex items-center justify-center" >
                    <Link href={'/profile'}><User /></Link>
                </button>
            </div>

        </nav>
    )
} 