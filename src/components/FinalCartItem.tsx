import { LucideTrash } from "lucide-react"

export const FinalCartItem = () => {
    return (
        <div className="grid grid-cols-5 p-3">
            <div className="flex items-center gap-4 relative">
                <button aria-label="Excluir Item" className="p-2 flex items-center justify-center rounded-full bg-gray-200">
                    <LucideTrash className="h-5 w-5" />
                </button>
                <img className="w-24 h-24" src="https://mobilestore.ec/wp-content/uploads/2021/01/Alexa-Echo-Dot-4ta-Gen-Azul-Mobile-Store-Ecuador.png" alt="" />
            </div>
            <span className="h-full flex items-center text-xl">Alexa Dot</span>
            <span className="h-full flex items-center text-xl font-light">R$ 399,98</span>
            <div className="flex items-center">
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-pink-300 text-white font-bold">-</button>
                <span className="w-10 h-10 flex items-center justify-center">1</span>
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-pink-300 text-white font-bold">+</button>
            </div>
            <span className="h-full flex items-center text-xl font-light">R$ 399,98</span>
        </div>
    )
}