import { FinalCartItem } from "@/components/FinalCartItem";
import { FinalCartList } from "@/components/FinalCartList";
import TransactionLayout from "@/layout/TransactionLayout";

const Transaction = () => {
    return (
        <TransactionLayout step={0}>
            <div className="flex">
                <div className="flex flex-col">
                    <FinalCartItem></FinalCartItem>
                    <FinalCartItem></FinalCartItem>
                    <FinalCartItem></FinalCartItem>
                    
                </div>

                <div>
                <div className="w-64 border h-full">
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
                        <button className="py-4 px-8 w-full bg-pink-300 text-white rounded-md">NEXT</button>
                    </div>
                </div>
            
                </div>

      

            </div>
        </TransactionLayout>
    )
}

export default Transaction;