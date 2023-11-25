// import React from 'react'

import ProductButton from "./button";

export const fetchApi = async () => {
    let data = await fetch('https://fakestoreapi.com/products');
    data = await data.json()
    return data
}

const ServerComponent = async () => {
    const productList = await fetchApi()

    return (
        <div>
            server component

            {productList.map((eachItem) => (
                <>
                    <p>{eachItem.title}</p>
                    {/* <button onClick={() => alert('hello')}>Button</button>              //NOT  WORKS BECAUSE IT IS SERVER COMPONENT*/}
                    <ProductButton title={eachItem.title} />
                </>

            ))}
        </div>
    )
}

export default ServerComponent