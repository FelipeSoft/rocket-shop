import { Cards } from "./Cards"
import { Sizes } from "./Sizes"


export const Product = () => {
    return (
        <section>
            <div className="mt-32 flex justify-center">
                <img className="w-96" src="https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_g_2703_1_20200722153139.jpg" alt="" />

                <div className="flex flex-col ml-24">
                    <h1 className="text-3xl">Lorem Ipsum (Nome da camisa)</h1> <br />
                    <p className="text-xl font-extrabold">Price: $100</p>
                    <p>Marca: Lorem Ipsum</p> <br />
                    <p>Tamanho:</p>
                    <Sizes></Sizes>

                    <button className="bg-pink-300 px-2 py-1 w-32 rounded-md font-bold mt-2">
                        BUY
                    </button>

                    <label className="mt-6" htmlFor="">Calcule o frete:</label>
                    <input className="outline-none bg-gray-200 rounded-md px-2 py-2" placeholder="Insira o seu CEP" type="text" />
                </div>

            </div>

            <div>
                <div className="text-2xl mt-32">
                    <h1>Quem viu este produto também comprou</h1>
                </div>
                <div className="flex justify-between">
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </div>

            </div>

        </section>
    )
}