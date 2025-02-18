import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const [cartItem, SetCartItem] = useState({})
    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            SetCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItem[item]
            }

        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItem,
        SetCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider