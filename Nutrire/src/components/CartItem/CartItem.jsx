import { useCart } from '../../hook/useCart';
import './CartItem.css'

const CartItem = ({id, name, quantity, price }) => {
    const { removeItem } = useCart();
    const handleRemove = (id) => {
    removeItem(id)
    }
    return (
    <article className="CardCartItem">
        <header className="HeaderCartItem">
        <h2 className="ItemHeaderCartItem">{name}</h2>
    </header>
        <section className="ContainerItemCartItem">
            <h5 className="ItemCartItem">Cantidad: {quantity}</h5>
            <h5 className="ItemCartItem">Precio x unidad: $ {price}</h5>
        </section>
        <footer className="ItemFooterCartItem">
            <h3 className="InfoCartItem">Subtotal: $ {price * quantity}</h3>
            <button className="btn btn-primary" onClick={() => handleRemove(id)}>
            ❌ Eliminar Producto
            </button>
        </footer>
    </article>
    );
}

export default CartItem