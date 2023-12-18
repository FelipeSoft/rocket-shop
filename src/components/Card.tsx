import { useRouter } from "next/router";

type Props = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const Card = ({ id, name, price, image }: Props) => {
    const router = useRouter();

    const redirectToProduct = () => {
        router.push(`/product/${id}`);
    }

    return (
        <div className="bg-white shadow-lg duration-75 px-2 py-8 w-56 rounded-md flex flex-col items-center">
            <img
                src={image} 
                alt="" 
                className="h-48"
            />
            <div className="text-black mt-4">
                <h2 className="text-xl">R$ {price.toFixed(2)}</h2>
                <p>{name}</p>
                <div className="flex mt-4">
                    <button className="mr-2 bg-white w-8 h-8 text-black rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></button>
                    <button 
                        onClick={() => redirectToProduct()}
                        className="bg-pink-200 px-8 py-1 text-black rounded-md text-sm">
                        DETALHES
                    </button>
                </div>
            </div>
        </div>
    )
}