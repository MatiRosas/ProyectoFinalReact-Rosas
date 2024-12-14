import {Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="card"   style={{width: "14rem"}}>
            <img src={product.img} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary"> Ver detalles</Link>
            </div>
        </div>
    );
}

export default Item