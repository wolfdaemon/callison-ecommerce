import { React, useEffect, useState } from "react";


export function ItemsForSale() {
    const [items, setItems] = useState([]);
    const Item = (props) => {
        return <div>
        <h1>{ props.obj.name }</h1>
        <p><strong>Description: </strong>{ props.obj.description }</p>
        <ul>
            <li>
               Operating System:  { props.obj.OS }
            </li>
            <li>
                Ram: { props.obj.ram } GB
            </li>
            <li>
                CPU: { props.obj.CPU }
            </li>
            </ul>
        <img src= { props.obj.Picture } className="item-img" />
        <h3> $ { props.obj.price }</h3>
        </div>;
            }

    const itemsMap = () => {
      return items.map(
        function(it){
          return <Item obj={ it } key={ it.id }/>;
        });
    };

    const emptyList = () => {
      return  <div>No items to show</div>;
    };

    const displayItems = (items.length > 0) ? itemsMap : emptyList;




    useEffect(() => {
        fetch("Products.json")
        .then(res => res.json())
        .then(data => setItems(data));
    }, [] )
    return <><h1>Items Available:</h1>{ displayItems() }</>;
}
