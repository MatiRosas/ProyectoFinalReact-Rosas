import cart from "/public/cart.svg";
import { useCart } from "../../hook/useCart";
import { Link } from "react-router-dom";
import './CardWidget.css';

function CardWidget() {
    const {totalQuantity} = useCart();

    return (
        <>
        <Link className="CartWidget" to="/cart">
            <img src={cart} 
            className="CartImg"
            alt="Carrito"
            />
            <div className="color-card">
                {totalQuantity}
            </div>
        </Link>
        </>
    );
}

export default CardWidget



