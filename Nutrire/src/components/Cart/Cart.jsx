import { Link } from "react-router-dom";
import { useCart } from "../../hook/useCart";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"


const Cart = () => {
    const {cart, getTotal, totalQuantity, clearCart} = useCart();
    
    const total = getTotal()

    if(totalQuantity === 0) {
        return ( <div>
        <h3 className="error-cart">¡Lo siento!😔 No dispones de Items en tu Carrito</h3>
        <h5 className="error-cart2">¿Deseas volver a <Link className="ver-catalogo" to='/' > VER CATALOGO</Link>?</h5>
        </div>
        )
    }


    return (
    <div className="cart-finish">
        {cart.map((item) => (
            <CartItem key={item.id} {...item}/>
        ))}

        <h2>Total: ${total}</h2>
        <div className="d-flex justify-content-center"> 
            <button onClick={clearCart} className="btn btn-warning">Vaciar tu carrito</button>
        <Link className="btn btn-info" to="/checkout">Comprar</Link>
        </div>
    </div>
);
}

export default Cart



