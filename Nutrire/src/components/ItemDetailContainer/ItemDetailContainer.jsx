import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); 
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    setProgress(0); 

    
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev)); 
    }, 500);

    getDoc(doc(db, "products", productId))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setProduct(product);
        setProgress(2000); 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clearInterval(progressInterval); 
        setLoading(false);
      });

    return () => clearInterval(progressInterval); 
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
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
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
