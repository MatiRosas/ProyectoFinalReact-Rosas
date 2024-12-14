import { useState } from "react";
import { useCart } from "../../hook/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();

    const createOrder = async () => {
    setLoading(true);
    try {
        const objOrder = {
        buyer: {
            Nombre: nombre,
            Apellido: apellido,
            Telefono: telefono,
            Direccion: direccion,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
        };

        const ids = cart.map((item)=> item.id)
        const productRef = collection(db, "products")

        const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore;

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach((doc)=> {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod)=> prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc});
                }
            })

            if (outOfStock.length === 0){
                await batch.commit();
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es: ${orderAdded.id}`)
                setOrderCreated(true)
                clearCart()
            } else{
                console.log("Hay productos sin stock")
            }
        } catch (error) {
            console.log("No se han podido cargar los productos", error);
        } finally {
            setLoading(false);
        }

        if (loading) {
            return <h4 className="orden-loading">⏳ ¡Espera! Ya casi. Se esta generando la orden</h4>;
        }
        if (orderCreated) {
            return <h2 className="orden-creada">La orden fue creada correctamente✔️</h2>;
        }
        };
    
        return (
        <>
            <div className="Checkout">
            <h2 className="text-center">CHECKOUT</h2>
            <h5>¡Ya casi tienes tu pedido! Solo falta completar los siguientes datos para que tu orden se genere con éxito. 🛒</h5>
            
            <label htmlFor="nombre">Nombre</label>
            <input onChange={(e) => setNombre(e.target.value)} value={nombre} />{" "}
            <label htmlFor="apellido">Apellido</label>
            <input onChange={(e) => setApellido(e.target.value)} value={apellido} />
            <label htmlFor="telefono">Teléfono</label>
            <input onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            <label htmlFor="direccion">Dirección</label>
            <input onChange={(e) => setDireccion(e.target.value)} value={direccion} />
            </div>
            <div>
            {cart.map((item) => (
                <article className="item-quantity" key={item.id}>
                <header>
                    <h2 className=" text-center m-5">
                    {item.name}{" "}
                    <span className="badge">Cantidad: {totalQuantity}</span>
                    </h2>
                </header>
                </article>
            ))}
            </div>
            
            {/* formulario */}
            <div className="d-flex justify-content-center p-3 ">
            <button className="btn btn-info" onClick={createOrder}>
                Generar Orden
            </button>
            </div>
        </>
        );
    }
    
    export default Checkout