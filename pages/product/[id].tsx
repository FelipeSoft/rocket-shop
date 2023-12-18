import { Card } from "@/components/Card"
import { Footer } from "@/components/Footer"
import { Sizes } from "@/components/Sizes"
import MainLayout from "@/layout/MainLayout"
import { products } from "@/utils/products.list"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type Product = {
    id: number;
    name: string;
    sizes: string[];
    price: number;
    band: string;
    currentInventory: number;
    image: string;
}

const Product = () => {
    const [foundProduct, setFoundProduct] = useState<Product>();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            console.log(id);
            const foundProductFromList = products.find((element) => element.id === Number(id));
            if (foundProductFromList) {
                setFoundProduct(foundProductFromList);
            }
        }
    }, [id]);

    return (
        <MainLayout>
            <section>
                <div className="mt-32 flex justify-center">
                    <img className="w-96" src={foundProduct?.image} alt="" />
                    <div className="flex flex-col ml-24">
                        <h1 className="text-3xl">{foundProduct?.name}</h1> <br />
                        <p className="text-xl font-extrabold">Preço: R$ {foundProduct?.price.toFixed(2)}</p>
                        <p>Marca: {foundProduct?.band}</p> <br />
                        <p>Tamanhos:</p>
                        <Sizes></Sizes>
                        <button className="bg-pink-300 px-2 py-1 w-32 rounded-md font-bold mt-2">
                            COMPRAR
                        </button>
                        <div className="flex flex-col">
                            <label className="mt-6" htmlFor="">Calcule o frete:</label>
                            <input className="outline-none bg-gray-200 rounded-md px-2 py-2" placeholder="Insira o seu CEP" type="text" />
                            <span className="text-right w-full">O cálculo de frete aparecerá aqui :)</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-2xl mt-32">
                        <h1>Quem viu este produto, também comprou:</h1>
                    </div>
                    <div className="grid grid-cols-5 gap-8">
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
                </div>
            </section>
            <Footer />
        </MainLayout>
    )
}

export default Product