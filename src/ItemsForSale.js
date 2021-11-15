import { React, useEffect } from "react";


export function ItemsForSale() {
    useEffect(() => {
        fetch("Products.json")
        .then(res => res.json())
        .then(data => console.log(data));
    } )
    return <></>;
}
