import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import UpperBody from '../../components/UpperBody'
import LowerBody from '../../components/LowerBody'
import Loading from "../../components/Loading"

const Product = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`, {})
            .then((res) => res.json())
            .then((response) => {
            setData(response);
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
    },[id]);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
            {!isLoading && (
                <>
                    <UpperBody  data={data} />
                    <LowerBody data={data} />
                </>
            )}
        </>
    )
}

export default Product