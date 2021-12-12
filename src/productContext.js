import { createContext } from "react";
import productData from "./Components/productData";
export const ProductContext = createContext();
export const ProductProvider = props => {
    return(
        <ProductContext.Provider value = { {productData} }>
            {props.children}
        </ProductContext.Provider>
    )
}