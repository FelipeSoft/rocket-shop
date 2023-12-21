import { FinalCartItem } from "@/components/FinalCartItem"
import TransactionLayout from "@/layout/TransactionLayout"
import { ArrowLeftFromLine, CheckCircle2 } from "lucide-react"

const confirmation = () => {
    return (

        <TransactionLayout step={3}>
            <div className="text-pink-300 flex absolute">
                <button className="flex">
                    <ArrowLeftFromLine />
                    <p>BACK</p>
                </button>

            </div>

            <div className="w-full flex justify-center">
                <div className="p-10 rounded-2xl bg-white shadow-2xl w-1/3 flex flex-col justify-center items-center">
                    <div className="text-green-500 flex flex-col text-center" >
                        <CheckCircle2 className="mt-6 w-56 h-56" />
                        <h1 className=" text-5xl" >SUCCESS</h1>
                        <p className=" text-gray-500">Seu pedido foi enviado</p>
                        <button className="mt-20 w-full border-2 border-pink-300 text-pink-300 p-3 rounded-md hover:bg-pink-300 hover:text-white">
                            FINALIZAR
                        </button>
                    </div>




                </div>
            </div>
        </TransactionLayout>


    )
}

export default confirmation