import Cart from "@/components/Cart/Cart"
import { CartItem } from "@/components/Cart/CartItem"
import { Navbar } from "@/components/NavBar"

type Props = {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <main className="mx-auto max-w-7xl min-h-screen">
            <Navbar />
            <Cart>
                <CartItem
                    band="Adaidas"
                    image="https://img.elo7.com.br/product/zoom/2C9707A/kit-20-camisas-lisas-para-sublimacao-branca-100-poliester-camisa-branca.jpg"
                    name="Camiseta Básica Branca"
                    price={49.90}
                    size="P"
                />
                <CartItem
                    band="Niko"
                    image="https://images.tcdn.com.br/img/img_prod/275189/camisa_preta_100_poliester_para_sublimacao_g_2697_1_20200722153318.jpg"
                    name="Camiseta Básica Nega"
                    price={99.90}
                    size="M"
                />
            </Cart>
            {children}
        </main>
    )
}

export default MainLayout