import { ProductActionTypes } from "../constants/Product-action-types";

export const allProducts = (products) =>{
    return {
        type: ProductActionTypes.ALL_PRODUCTS,
        payload: products
    };

};

export const selectedProducts = (product) =>{
    return {
        type: ProductActionTypes.SELECTED_PRODUCTS,
        payload: product
    };

};

export const removedProduct = () =>{
    return {
        type: ProductActionTypes.REMOVED_PRODUCT,
    };
};