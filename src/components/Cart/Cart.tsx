import { CartContext } from "@/contexts/CartContext";
import { X } from "lucide-react";
import { useContext } from "react";

const Cart = ({ children }: { children: React.ReactNode }) => {
    const cartContext = useContext(CartContext);

    return (
        <div className={`w-screen h-screen inset-0 transition-all bg-black/30 ${cartContext?.visibility ? "fixed" : "hidden"}`}>
            <aside className={`${cartContext?.visibility ? "md:w-1/2 lg:w-1/3 w-full" : "w-0"} transition-all fixed bottom-0 top-0 p-5 right-0 shadow-2xl shadow-gray-500 min-h-screen overflow-y-auto bg-white`}>
                <div className="flex items-center justify-between">
                    <button className="" aria-label="close cart side" onClick={() => cartContext?.setVisibility(false)}><X className="w-10 h-10" /></button>
                    <h1 className="text-2xl font-semibold">Meu Carrinho</h1>
                </div>
                <section>
                    {children}
                </section>
                <section className="absolute p-5 bottom-0 right-0 left-0">
                    <article className="flex items-center justify-between py-4 border-b border-b-gray-300">
                        <h2 className="text-md">Subtotal</h2>
                        <span className="font-bold text-lg">R$ 149.80</span>
                    </article>
                    <article className="flex items-center justify-between py-4 border-b border-b-gray-300">
                        <h2 className="text-md">Cupom: FILIPINHO34</h2>
                        <span className="font-bold text-lg text-green-500">-10%</span>
                    </article>
                    <article className="flex items-center justify-between py-4 border-b border-b-gray-300">
                        <h2 className="text-md">Total</h2>
                        <span className="font-bold text-lg">R$ 134.82</span>
                    </article>
                </section>
            </aside>
        </div>
    );
}

export default Cart;