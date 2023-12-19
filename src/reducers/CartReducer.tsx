import { Reducer } from "react";
import { Cart } from "@/utils/types/Cart";

type Add = {
    type: "add";
    payload: {
        name: string;
        quantity: number;
        price: number;
        size: string;
    }
}

type Update = {
    type: "update";
    payload: {
        id: number;
        quantity: number;
        size: string;
    }
}

type Remove = {
    type: "remove";
    payload: {
        id: number
    }
}

export type CartAction = Add | Update | Remove;

export const initialCartState: Cart[] = [];

export const CartReducer: Reducer<Cart[], CartAction> = (state, action) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    size: action.payload.size
                }
            ];
        case "update":
            return state.map((element) => {
                if (element.id === action.payload.id) {
                    element.quantity += action.payload.quantity;
                    element.size = action.payload.size;
                }
                return element;
            });
        case "remove":
            return state.filter((element) => element.id !== action.payload.id);
        default:
            return state;
    }
}