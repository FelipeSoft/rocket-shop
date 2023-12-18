import { Cards } from "@/components/Cards"
import { Footer } from "@/components/Footer"
import MainLayout from "@/layout/MainLayout"

const Index = () => {
    return (
        <MainLayout>
            <div className="flex-col h-56 w-full bg-pink-300 rounded-3xl flex items-center justify-center">
                <h2 className="mb-2 text-2xl font-extrabold italic text-center " >$20 OFF $100 PLUS, <br />
                    GET FREE NEXT-DAY DELIVERY
                </h2>
                <p className="mb-4">With code: 20100</p>

                <button className="bg-black text-white px-10 py-3 rounded-2xl">OK</button>
            </div>
            <br />
            <div className="bg-pink-200 px-6 py-4 rounded-md shadow-md  ">
                <h3 className="text-black">
                    Lorem Ipsum
                </h3>
            </div>

            <br />

            <div className="mb-4 flex justify-between">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>

            <div className="mb-4 flex justify-between">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>

            <div className="mb-4 flex justify-between">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
            <Footer></Footer>
        </MainLayout>
    )
}
// Navbar
// Carrinho
// Página Inicial
// Página de Produto (de um em específico)
// Página de Pagamento

export default Index