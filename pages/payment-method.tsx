import { FinalCartItem } from "@/components/FinalCartItem";
import { FinalCartList } from "@/components/FinalCartList";
import TransactionLayout from "@/layout/TransactionLayout";
import { CircleDollarSign, CreditCard, DollarSign, Banknote } from "lucide-react";

const Transaction = () => {
    return (
        <TransactionLayout step={1}>
            <div className="flex flex-col mt-10 gap-y-4 w-1/2">
                <div className="flex">
                    <div className="text-2xl font-extrabold text-pink-400 mx-2 mt-1">
                        <Banknote />
                    </div>
                    <h1 className="text-2xl font-extrabold text-gray-700">FORMA DE PAGAMENTO</h1>
                </div>

                <label htmlFor="" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                    <input type="radio" className="ml-2 mr-4" />
                    PIX
                    <CircleDollarSign className="ml-3 mt-1" />
                </label>

                <label htmlFor="" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                    <input type="radio" className="ml-2 mr-4" />
                    CARTÃO DE CRÉDITO
                    <CreditCard className="ml-3 mt-1" />
                </label>

                <label htmlFor="" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                    <input type="radio" className="ml-2 mr-4" />
                    CARTÃO DÉBITO
                    <DollarSign className="ml-3 mt-1" />
                </label>
            </div>


            <div className="w-1/3 border border-gray-400 rounded-md h-full">
                <h1 className="text-2xl font-semibold p-3">Total do Carrinho</h1>
                <div className="flex flex-col items-center justify-between gap-4 p-3">
                    <h2 className="text-md font-bold w-max">Total da compra:</h2>
                    <span className="text-4xl flex w-max text-green-500">R$ 1.089,00</span>
                </div>
                <div className="p-3 w-full flex flex-col gap-y-2 items-center justify-center">
                    <button className="py-4 px-8 w-full bg-pink-300 text-white rounded-md">NEXT</button>
                    <button className="py-4 px-8 w-full border-2 border-pink-300 text-pink-300 rounded-md">BACK</button>
                </div>
            </div>



        </TransactionLayout>
    )
}

export default Transaction;
