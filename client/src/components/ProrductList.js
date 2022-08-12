import React, {useState, useEffect} from "react";
import axios from "axios";
const ProductList = (props) => {
    const {title, setProduct} = props;

    useEffect(() => {
        axios.get("http//localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {
                product.map((product, index)=>{
                    return <p key={index}>{product.title} - {product.price}</p>
                })
            }
        </div>
    )
}
export default ProductList;