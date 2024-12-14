import { useState } from "react";
import "./ItemCount.css"


function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue);
    

    const decrement = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad -1)
        }
    }
    const increment = () => {
        if(stock > cantidad){
            setCantidad((cantidad) => cantidad + 1);
        }
    };

    return (
    <>
        <div className="contain-detail">
        <h1>{cantidad}</h1>
        <button onClick={increment}>Aumentar</button>
        <button onClick={decrement}>Disminuir</button>
        <button onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
        </div>
    </>
    );
}

export default ItemCount