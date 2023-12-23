import { FinalCartItem } from "@/components/FinalCartItem";
import { ArrowRightFromLine } from "lucide-react";
import Link from "next/link";
import router from "next/router";
import { useEffect, useRef, useState } from "react";
import { CircleDollarSign, CreditCard, DollarSign, Banknote, ArrowLeftFromLine } from "lucide-react";

type CardInfo = {
    name: string;
    cardNumber: string;
    validity: string;
    cvv: string;
}

export default function ProcessPayment() {
    const [step, changeStep] = useState(0);
    const [cardInfo, setCardInfo] = useState<CardInfo>({ name: "", cardNumber: "", validity: "", cvv: "" });

    const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = e.target;

        if (value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]!.focus();
        }

        setCardInfo((prevInfo) => ({
            ...prevInfo,
            [e.target.id]: value,
        }));
    };

    const handleBackspace = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && index >= 0) {
            e.preventDefault();

            setCardInfo((prevInfo) => {
                const updatedInfo: Partial<CardInfo> = {};

                for (let i = index; i >= 0; i--) {
                    const key = Object.keys(prevInfo)[i];
                    if (key) {
                        updatedInfo[key as keyof CardInfo] = i === index ? "" : prevInfo[key as keyof CardInfo];
                    }
                }

                if (inputRefs.current[index] && inputRefs.current[index]!.value !== "") {
                    inputRefs.current[index]!.value = "";
                } else if (inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1]!.focus();
                }

                return { ...prevInfo, ...updatedInfo };
            });
        }
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <nav className="w-screen border-b border-b-gray-200 h-full rounded-tr-2xl rounded-tl-2xl flex justify-between px-32 mx-auto max-w-7xl bg-white shadow-2xl" >
                <Link href="" className={`flex items-center justify-center ${step === 0 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>CARRINHO</Link>
                <Link href="" className={`flex items-center justify-center ${step === 1 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>MÉTODO DE PAGAMENTO</Link>
                <Link href="" className={`flex items-center justify-center ${step === 2 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>DETALHES DE PAGAMENTO</Link>
                <Link href="" className={`flex items-center justify-center ${step === 3 && "py-4 text-blue-400 font-semibold border-b-4 border-b-blue-400 h-full"}`}>CONFIRMAÇÃO</Link>
            </nav>
            <div className="w-screen flex flex-col justify-between py-12 px-32 rounded-br-2xl rounded-bl-2xl mx-auto max-w-7xl bg-white shadow-2xl">
                {step === 0 && (
                    <>
                        <div className="text-pink-300 w-full flex justify-end">
                            <button onClick={() => changeStep(1)} className="flex gap-2 text-blue-400">
                                NEXT
                                <ArrowRightFromLine />
                            </button>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col">
                                <FinalCartItem></FinalCartItem>
                                <FinalCartItem></FinalCartItem>
                                <FinalCartItem></FinalCartItem>
                            </div>
                            <div className="flex items-center" >
                                <div className="w-64 border h-max">
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
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {step === 1 && (
                    <>
                        <div className="text-pink-300 flex w-full justify-between">
                            <button onClick={() => changeStep(0)} className="flex text-black">
                                <ArrowLeftFromLine />
                                BACK
                            </button>
                            <button onClick={() => changeStep(2)} className="flex gap-2 text-blue-400">
                                NEXT
                                <ArrowRightFromLine />
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col mt-10 gap-y-4 w-1/2">
                                <div className="flex">
                                    <div className="text-2xl font-extrabold text-pink-400 mx-2 mt-1">
                                        <Banknote />
                                    </div>
                                    <h1 className="text-2xl font-extrabold text-gray-700">FORMA DE PAGAMENTO</h1>
                                </div>

                                <label htmlFor="pix" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                                    <input type="radio" id="pix" name="paymentMethod" className="ml-2 mr-4" />
                                    PIX
                                    <CircleDollarSign className="ml-3 mt-1" />
                                </label>

                                <label htmlFor="creditCard" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                                    <input type="radio" id="creditCard" name="paymentMethod" className="ml-2 mr-4" />
                                    CARTÃO DE CRÉDITO
                                    <CreditCard className="ml-3 mt-1" />
                                </label>

                                <label htmlFor="debitCard" className="border-2 p-3 rounded-md border-gray-400 hover:border-pink-400 text-lg text-gray-700 flex items-center">
                                    <input type="radio" id="debitCard" name="paymentMethod" className="ml-2 mr-4" />
                                    CARTÃO DÉBITO
                                    <DollarSign className="ml-3 mt-1" />
                                </label>
                            </div>
                            <div className="w-1/3 border border-gray-400 rounded-md flex flex-col items-center">
                                <h1 className="text-2xl font-semibold p-3">Total do Carrinho</h1>
                                <div className="flex flex-col items-center justify-between gap-4 p-3">
                                    <h2 className="text-md font-bold w-max">Total da compra:</h2>
                                    <span className="text-4xl flex w-max text-green-500">R$ 1.089,00</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <div className="text-pink-300 flex w-full justify-between">
                            <button onClick={() => changeStep(1)} className="flex text-black">
                                <ArrowLeftFromLine />
                                BACK
                            </button>
                            <button onClick={() => changeStep(3)} className="flex gap-2 text-blue-400">
                                NEXT
                                <ArrowRightFromLine />
                            </button>
                        </div>
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
                    </>
                )}
                {step === 3 && (
                    <>
                        <div className="text-pink-300 flex absolute w-full">
                            <button className="flex text-black" onClick={() => changeStep(2)}>
                                <ArrowLeftFromLine />
                                BACK
                            </button>
                        </div>
                        <div className="w-full flex justify-center items-center flex-col mt-6">
                            <div className="flex items-center justify-center flex-col">
                                <h1 className="font-bold text-2xl">Confirmação do Pagamento</h1>
                                <p>Enviaremos um código de 6 dígitos no seu e-mail, assim que você resgatá-lo informe-o aqui.</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 w-max mt-6" id="confirmation-numbers-group">
                                {[1, 2, 3, 4, 5, 6].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        id={index.toString()}
                                        maxLength={1}
                                        onChange={(e) => handleInputChange(e, index - 1)}
                                        onKeyDown={(e) => handleBackspace(e, index - 1)}
                                        className="transition-all text-4xl border-b-4 w-10 outline-none text-center focus:border-b-pink-300"
                                        ref={(el) => (inputRefs.current[index - 1] = el)}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}