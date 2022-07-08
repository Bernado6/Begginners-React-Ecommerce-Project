import { ProductActionTypes } from "../constants/Product-action-types";

const initialState = {
    productList: []
};

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ProductActionTypes.ALL_PRODUCTS:
            return {...state, productList: action.payload};    
        default:
            return state;
    }
}