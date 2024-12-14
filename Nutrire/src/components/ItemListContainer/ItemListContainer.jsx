import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNotification } from "../../cotext/NotificationContext";
import "./ItemListContainer.css";

function ItemListContainer({ greetings }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0); 
    const { categoryId } = useParams();
    const { setNotification } = useNotification();

    useEffect(() => {
    setLoading(true);
    setProgress(0); 

    const progressInterval = setInterval(() => {
    setProgress((prev) => (prev < 90 ? prev + 10 : prev)); 
    }, 100);

    const collectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products");

    getDocs(collectionRef)
    .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
        });
        setProducts(productos);
        setProgress(2000); 
    })
    .catch(() => {
        setNotification("danger", `No es posible cargar los productos`);
    })
    .finally(() => {
        clearInterval(progressInterval); 
        setLoading(false);
    });

    return () => clearInterval(progressInterval); 
}, [categoryId]);

    if (loading) {
    return (
        <div className="body-loading">
        <div className="loader">
            <p className="loading-text">Cargando...</p>
            <div className="progress-bar">
            <div
                className="progress"
            style={{ width: `${progress}%` }} 
            ></div>
        </div>
        </div>
    </div>
    );
}

return (
    <>
    <div className="bienvenida">
        <h3>{greetings}</h3>
            <h2> ¡Bienvenidos a NUTRIRE!</h2>
            <h4>
                ¡¡Bienvenidos a la tienda, donde vas a encontrar todos los productos
                que estás necesitando!!
            </h4>
        </div>
        <div className="products-items">
        <ItemList products={products} />
    </div>
    </>
    );
}

export default ItemListContainer;
