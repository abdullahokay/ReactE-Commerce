import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import UpperBody from '../../components/UpperBody'
import LowerBody from '../../components/LowerBody'

const Product = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((response) => {
            setData(response);
            setIsLoading(false);
            console.log("deneme",response);
            console.log(`https://dummyjson.com/products/${id}`);
          })
          .catch((error) => console.log(error));
    });

    

    return (
        <>
            <UpperBody  data={data} />
            <LowerBody data={data} />
        </>
    )
}

export default Product