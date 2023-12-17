import { FinalCartItem } from "@/components/FinalCartItem";
import { FinalCartList } from "@/components/FinalCartList";
import MainLayout from "@/layout/MainLayout";
import { ChevronRight, LucideTrash } from "lucide-react";
import Link from "next/link";

const FinalCart = () => {
    return (
        <MainLayout>
            <div className="flex mt-10 gap-4">
                <div className="w-3/4">
                    <h1 className="text-3xl font-semibold">Carrinho de Compras: 4 itens</h1>
                    <h2 className="my-4 font-semibold">Produtos</h2>
                    <FinalCartList>
                        <FinalCartItem/>
                        <FinalCartItem/>
                        <FinalCartItem/>
                    </FinalCartList>
                </div>
                <div className="w-1/4 border h-full">
                    <h1 className="text-2xl font-semibold p-3">Total do Carrinho</h1>
                    <div className="flex items-center justify-between gap-4 p-3">
                        <h2 className="font-light">SUBTOTAL</h2>
                        <span className="text-xl">R$ 1.119,94</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-3">
                        <h2 className="font-light w-max">CUPOM</h2>
                        <span className="text-xl flex w-max">- R$ 110.94</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-3">
                        <h2 className="font-light w-max">FRETE</h2>
                        <span className="flex w-max text-green-500">GRÁTIS</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-3">
                        <h2 className="font-light w-max">TOTAL</h2>
                        <span className="text-xl flex w-max">R$ 1.089,00</span>
                    </div>
                    <div className="p-3 w-full flex items-center justify-center">
                        <button className="py-4 px-8 w-full bg-pink-300 text-white rounded-md">PROCESSAR PAGAMENTO</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default FinalCart;