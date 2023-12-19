import TransactionLayout from "@/layout/TransactionLayout"
import { useState } from "react";

type CardInfo = {
    name: string;
    cardNumber: string;
    validity: string;
    cvv: string;
}

const Payment = () => {
    const [cardInfo, setCardInfo] = useState<CardInfo>({ name: "", cardNumber: "", validity: "", cvv: "" });

    return (
        <TransactionLayout step={2}>
            <div className="w-full flex justify-between items-center">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-96 h-56 flex items-center justify-center rounded-2xl shadow-xl shadow-gray-400">
                    <div className="flex flex-col w-full p-10" >
                        <img className="mb-4 h-10 w-10" src="/images/chip.jpg" alt="" />
                        <h2 className="text-lg text-gray-200 tracking-widest">{cardInfo.cardNumber !== "" ? cardInfo.cardNumber : "XXXX XXXX XXXX XXXX"}</h2>
                        <div className="mt-4 flex text-gray-200 text-lg relative" >
                            <p className="mr-28 absolute w-max" >{cardInfo.name !== "" ? cardInfo.name : "JACK SPARROW"}</p>
                            <p className="absolute right-0">2/22</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-extrabold mb-6" >Payment Details</h1>

                    <label className="text-gray-400" htmlFor="">Name on Card</label>
                    <input
                        onChange={(e) => setCardInfo((prevInfo) => ({
                            ...prevInfo,
                            name: (e.target.value).toUpperCase()
                        }))}
                        className="mb-6 bg-white border-b border-gray-300 outline-none"
                        type="text"
                        maxLength={24}
                    />

                    <label className="text-gray-400" htmlFor="">Card Number</label>
                    <input
                        onChange={(e) => setCardInfo((prevInfo) => ({
                            ...prevInfo,
                            cardNumber: e.target.value
                        }))}
                        className="mb-8 bg-white border-b border-gray-300 outline-none w-full" type="text"
                        maxLength={19}
                    />

                    <div className="flex gap-12 w-full">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-400" htmlFor="">Validade</label>
                            <input className="mr-44 w-full bg-white border-b border-gray-300 outline-none" type="text" />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-400" htmlFor="">CVV</label>
                            <input className="w-full bg-white border-b border-gray-300 outline-none" type="text" />
                        </div>
                    </div>


                    <div className="flex items-center justify-center w-full">
                        <button className="w-1/2 mt-12 shadow-lg bg-gradient-to-l from-blue-400 to-blue-500 py-3 rounded-md text-white">
                            PAY $(VALOR)
                        </button>
                    </div>
                </div>
            </div>
        </TransactionLayout >
    )
}

export default Payment