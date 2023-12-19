type Props = {
    name: string;
    band: string;
    price: number;
    image: string;
    size: string;
}

export const CartItem = ({ name, band, price, image, size }: Props) => {
    return (
        <article className="flex items-end justify-between my-6 h-full relative">
            <div className="flex items-center gap-2">
                <img className="w-20" src={image} alt="" />
                <div>
                    <h1 className="text-md font-semibold w-max">{name} ({size})</h1>
                    <p className="text-sm text-gray-500">{band}</p>
                    <h2 className="font-semibold text-md">R$ {price.toFixed(2)}</h2>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <button className="border border-black bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-xl">+</button>
                <span className="flex items-center justify-center">1</span>
                <button className="border border-black bg-white text-black rounded-full h-6 w-6 flex items-center justify-center text-xl">-</button>
            </div>
        </article>
    );
}