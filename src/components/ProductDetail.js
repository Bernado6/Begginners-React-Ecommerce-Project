 import { useParams } from "react-router-dom";
 import axios from "axios";
import { useEffect } from "react";

 const ProductDetail = () => {
    const { productId } = useParams();


    const getProduct = async () => {
        const results = await axios
        .get(`https://fakestoreapi.com/products${productId}`)
        .catch((error) => {
            console.log(error);
        });
    console.log(results.data);
    // dispatch(allProducts(results.data));
    }

    useEffect(() => {
        if (productId && productId !== "") {
            getProduct();
        }
    },[productId])// execute once when component loads

    return (
        <div>
            <p style={{ marginTop: "60px", color: "red" }}>Showing All Product Details </p>
        </div>
    )
};

export default ProductDetail;