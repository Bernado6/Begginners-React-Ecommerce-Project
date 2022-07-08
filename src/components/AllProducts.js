import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { allProducts } from "../redux/actions/product-actions";

import axios from "axios";
import { useEffect } from "react";

const AllProducts = () => {
    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    const getAllProducts = async () => {
        const results = await axios
        .get('https://fakestoreapi.com/products')
        .catch((error) => {
            console.log(error);
        });
    // console.log(results.data);
    dispatch(allProducts(results.data));
    }

    useEffect(() => {
        getAllProducts();
    },[])// execute once when component loads

    console.log("From Store; " , products)

    return (
        <div className="ui grid container margin-top-style">
            <ProductComponent />
        </div>
    )
};

export default AllProducts;