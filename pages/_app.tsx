import { AppProps } from "next/app";
import '../src/app/globals.css'
import { CartProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    )
}