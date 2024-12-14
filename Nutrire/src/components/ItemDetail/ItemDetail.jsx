
import { useCart } from "../../hook/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "../../cotext/NotificationContext";
import "./ItemDetail.css"


const ItemDetail = ({name, img, description, stock, category, id, price}) => {

const {addItem, isInCart} = useCart();
const {setNotification} = useNotification()



const handleAdd = (count) => {
    
    const produtObj = {
    id, name, price, quantity: count
    } 
    addItem(produtObj)
    setNotification("success", `Se agregaron ${count} de ${name}`);
}

return (
    <article className="detail-product">
    <div className="card">
    <h2>{name}</h2>
        <img
        src={img}
        style={{ width: 200 }}
        className="card-img-top"
        alt={name}
        />
        <div className="card-body">
        <p className="card-text">{description}</p>
        <p className="card-text">Categoria: {category}</p>
        <h2 className="card-text">Precio: ${price}</h2>
        <h5 className="card-text">Cantidad en Stock: {stock}</h5>
        </div>
        <div className="items">
    {
        isInCart(id) ? (
        <Link className="link-compra" to='/cart'>Finalizar Compra</Link>
        ): (
            <div className="item-count">
        <ItemCount stock={stock} onAdd={handleAdd} />
            </div>
        )
    }
    </div>
    </div>
    
    </article>
);
}

export default ItemDetail
