import { Card } from "@/components/Card"
import { Footer } from "@/components/Footer"
import MainLayout from "@/layout/MainLayout"
import { products } from "@/utils/products.list"

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
            <div className="bg-pink-200 px-6 py-4 rounded-md shadow-md">
                <h3 className="text-black">Produtos</h3>
            </div>
            <br />

            {/* Layout Anterior */}
            {/* <div className="mb-4 flex justify-between">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="mb-4 flex justify-between">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="mb-4 flex justify-between">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div> */}

            {/* Layout Atual (Utilizando CSS GRID) */}
            <div className="gap-8 grid grid-cols-5">
                {products.map((product) => {
                    return (
                        <Card
                            image={product.image}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    )
                })}
            </div>
            <Footer></Footer>
        </MainLayout>
    )
}

export default Index