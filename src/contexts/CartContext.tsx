import { CartAction, CartReducer, initialCartState } from "@/reducers/CartReducer";
import { Cart } from "@/utils/types/Cart";
import { createContext, useReducer, useState } from "react";

type CartContextProps = {
    state: Cart[];
    dispatch: React.Dispatch<CartAction>;
    visibility: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextProps | null>(null);

type CartProviderProps = {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialCartState);
    const [visibility, setVisibility] = useState(false);

    return (
        <CartContext.Provider value={{ state, dispatch, visibility, setVisibility }}>
            {children}
        </CartContext.Provider>
    );
};