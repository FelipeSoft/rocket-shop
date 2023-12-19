import Link from "next/link";
import { useState } from "react";

const TransactionLayout = ({ children, step }: { children: React.ReactNode, step: number }) => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100 ">
            <nav className="w-screen border-b border-b-gray-200 h-full rounded-tr-2xl rounded-tl-2xl flex justify-between px-32 mx-auto max-w-7xl bg-white shadow-2xl" >
                <Link href="" className={`flex items-center justify-center ${step === 0 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>CARRINHO</Link>
                <Link href="" className={`flex items-center justify-center ${step === 1 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>DETALHES DE COMPRA</Link>
                <Link href="" className={`flex items-center justify-center ${step === 2 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>DETALHES DE PAGAMENTO</Link>
                <Link href="" className={`flex items-center justify-center ${step === 3 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>CONFIRMAÇÃO</Link>
            </nav>

            <div className="w-screen flex justify-between py-12 px-32 rounded-br-2xl rounded-bl-2xl mx-auto max-w-7xl bg-white shadow-2xl">
                {children}
            </div>
        </div >
    )
}

export default TransactionLayout;