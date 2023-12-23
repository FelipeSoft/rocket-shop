import { Navbar } from "@/components/NavBar";
import MainLayout from "@/layout/MainLayout";
import { BadgeCheckIcon, Key, Mail, Rocket } from "lucide-react";
import Link from "next/link";

const Product = () => {
    return (
        <div className="flex p-20 w-screen h-screen flex-col items-center justify-center">

            <div className="">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-3xl mb-1 font-extrabold">Login</h2>
                        <p className="relative mb-6 text-gray-700">Please sign in to continue</p>
                    </div>
                    <Link href="/register" className="mt-5 flex items-center justify-center gap-1 h-full"><BadgeCheckIcon/> Sign Up </Link>
                </div>

                <div className="mb-4 flex bg-gray-200 items-center gap-4 rounded-md py-2 px-4 w-full">
                    <Mail className="w-4 h-4" />
                    <div>
                        <label className="text-sm text-gray-600" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            className="outline-none placeholder:text-xs bg-gray-200 w-full rounded-lg"
                            type="text"
                            id="email"
                            placeholder="DAVINCI@GMAIL.COM"
                        />
                    </div>
                </div>

                <div className="mb-4 flex bg-gray-200 items-center gap-4 rounded-md py-2 px-4 w-full">
                    <Key className="w-4 h-4" />
                    <div>
                        <label className="text-sm text-gray-600" htmlFor="email">
                            Senha
                        </label>
                        <input
                            className="outline-none placeholder:text-xs bg-gray-200 w-full rounded-lg"
                            type="password"
                            id="password"
                            placeholder="YOUR PASSWORD"
                        />
                    </div>
                </div>

                <button className="bg-pink-400 text-white w-full px-2 py-4 rounded-lg transition-all max-w-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300">
                    LOGIN
                </button>

                <div className="flex mt-2 justify-center">
                    <p className="text-xs text-pink-400">Forgot password?</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
