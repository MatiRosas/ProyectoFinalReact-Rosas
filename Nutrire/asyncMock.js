import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./src/services/firebase";

const products = [
    {
        
        name: " Granola Tradicional (1kg)",
        price: 7100, 
        category: "granola",
        img: "/public/images/granola-tradicional.jpg",
        stock: 2,
        description: "Elegí la granola, y disfruta del sabor🥰",
    },
    {
        
        name: " Granola Tradicional (500g)",
        price: 3800, 
        category: "granola",
        img: "/public/images/granola-tradicional.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: " Granola Tradicional (250g)",
        price: 2100, 
        category: "granola",
        img: "/public/images/granola-tradicional.jpg",
        stock: 8,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola energética (1kg)",
        price: 7100,
        category: "granola",
        img: "/public/images/granola-energetica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola energética (500g)",
        price: 3800,
        category: "granola",
        img: "/public/images/granola-energetica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola energética (250g)",
        price: 2100,
        category: "granola",
        img: "/public/images/granola-energetica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Económica (1kg)",
        price: 4500,
        category: "granola",
        img: "/public/images/granola-economica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Económica (500g)",
        price: 2400,
        category: "granola",
        img: "/public/images/granola-economica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Económica (250g)",
        price: 1400,
        category: "granola",
        img: "/public/images/granola-economica.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Tradicional con chips de chocolate (1kg)",
        price: 8100,
        category: "granola",
        img: "/public/images/granola-chocolate.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Tradicional con chips de chocolate (500g)",
        price: 4300,
        category: "granola",
        img: "/public/images/granola-chocolate.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Granola Tradicional con chips de chocolate (250g)",
        price: 2400,
        category: "granola",
        img: "/public/images/granola-chocolate.jpg",
        stock: 4,
        description: "Elegí la granola, y disfruta del sabor🥰"
    },
    {
        
        name: "Mix Europeo (1kg)",
        price: 8600,
        category: "mixs",
        img: "/public/images/mix-europeo.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, maní y pasas de uva🌰"
    },
    {
        
        name: "Mix Europeo (500g)",
        price: 4600,
        category: "mixs",
        img: "/public/images/mix-europeo.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, maní y pasas de uva🌰"
    },
    {
        
        name: "Mix Europeo (250g)",
        price: 2500,
        category: "mixs",
        img: "/public/images/mix-europeo.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, maní y pasas de uva🌰"
    },
    {
        
        name: "Mix Energético (1kg)",
        price: 10000,
        category: "mixs",
        img: "/public/images/mix-energetico.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, banana, maní y semillas de girasol🌻"
    },
    {
        
        name: "Mix Energético (500g)",
        price: 5350,
        category: "mixs",
        img: "/public/images/mix-energetico.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, banana, maní y semillas de girasol🌻"
    },
    {
        
        name: "Mix Energético (250g)",
        price: 2850,
        category: "mixs",
        img: "/public/images/mix-energetico.jpg",
        stock: 4,
        description: "Nueces, almendras, castañas de cajú, banana, maní y semillas de girasol🌻"
    },
    {
        
        name: "Mix Colación (1kg)",
        price: 7200,
        category: "mixs",
        img: "/public/images/mix-colacion.webp",
        stock: 4,
        description: "Almendras partidas, pasas de uva, maní, nueces mariposas light, granola, chips banana y girasol🥜"
    },
    {
        
        name: "Mix Colación (500g)",
        price: 3850,
        category: "mixs",
        img: "/public/images/mix-colacion.webp",
        stock: 4,
        description: "Almendras partidas, pasas de uva, maní, nueces mariposas light, granola, chips banana y girasol🥜"
    },
    {
        
        name: "Mix Colación (250g)",
        price: 2100,
        category: "mixs",
        img: "/public/images/mix-colacion.webp",
        stock: 4,
        description: "Almendras partidas, pasas de uva, maní, nueces mariposas light, granola, chips banana y girasol🥜"
    },
    {
        
        name: "Mix Exótico (1kg)",
        price: 18400,
        category: "mixs",
        img: "/public/images/mix-exotico.webp",
        stock: 4,
        description: "Nuez extra light, almendras, nueces pecan, castañas de cajú y avellanas💣"
    },
    {
        
        name: "Mix Exótico (500g)",
        price: 9800,
        category: "mixs",
        img: "/public/images/mix-exotico.webp",
        stock: 4,
        description: "Nuez extra light, almendras, nueces pecan, castañas de cajú y avellanas💣"
    },
    {
        
        name: "Mix Exótico (250g)",
        price: 5250,
        category: "mixs",
        img: "/public/images/mix-exotico.webp",
        stock: 4,
        description: "Nuez extra light, almendras, nueces pecan, castañas de cajú y avellanas💣"
    },
    {
        
        name: "Pasas de Uva (1kg)",
        price: 4800,
        category: "frutossecos",
        img: "/public/images/pasas-uva.jpg",
        stock: 4,
        description: "Disfruta de las mejores pasas de uva🍇"
    },
    {
        
        name: "Pasas de Uva (500g)",
        price: 2600,
        category: "frutossecos",
        img: "/public/images/pasas-uva.jpg",
        stock: 4,
        description: "Disfruta de las mejores pasas de uva🍇"
    },
    {
        
        name: "Pasas de Uva (250g)",
        price: 1400,
        category: "frutossecos",
        img: "/public/images/pasas-uva.jpg",
        stock: 4,
        description: "Disfruta de las mejores pasas de uva🍇"
    },
    {
        
        name: "Dátiles con carozo (1kg)",
        price: 8500,
        category: "frutossecos",
        img: "/public/images/datiles.jpg",
        stock: 4,
        description: "Endulza con estos dátiles que son una bomba✨"
    },
    {
        
        name: "Dátiles con carozo (500g)",
        price: 4600,
        category: "frutossecos",
        img: "/public/images/datiles.jpg",
        stock: 4,
        description: "Endulza con estos dátiles que son una bomba✨"
    },
    {
        
        name: "Dátiles con carozo (250g)",
        price: 2500,
        category: "frutossecos",
        img: "/public/images/datiles.jpg",
        stock: 4,
        description: "Endulza con estos dátiles que son una bomba✨"
    },
    {
        
        name: "Coco Rallado (1kg)",
        price: 8600,
        category: "frutossecos",
        img: "/public/images/cocorallado.webp",
        stock: 4,
        description: "Sumale coco a tus comidas🥥"
    },
    {
        
        name: "Coco Rallado (500g)",
        price: 4600,
        category: "frutossecos",
        img: "/public/images/cocorallado.webp",
        stock: 4,
        description: "Sumale coco a tus comidas🥥"
    },
    {
        
        name: "Coco Rallado (250g)",
        price: 2500,
        category: "frutossecos",
        img: "/public/images/cocorallado.webp",
        stock: 4,
        description: "Sumale coco a tus comidas🥥"
    },
    {
        
        name: "Coco Rallado (100g)",
        price: 1100,
        category: "frutossecos",
        img: "/public/images/cocorallado.webp",
        stock: 4,
        description: "Sumale coco a tus comidas🥥"
    },
    {
        
        name: "Barritas Integra",
        price: 1300,
        category: "barritas",
        img: "/public/images/barrita-integra.jpg",
        stock: 4,
        description: "¡Suma tu barrita al carrito!"
    },
    {
        
        name: "Barritas Proteicas Integra",
        price: 1600,
        category: "barritas",
        img: "/public/images/barra-proteica.jpeg",
        stock: 4,
        description: "¡Suma tu barrita al carrito!"
    },
    {
        
        name: "Barritas Muecas",
        price: 1300,
        category: "barritas",
        img: "/public/images/barrita-mueca.jpg",
        stock: 4,
        description: "¡Suma tu barrita al carrito!"
    },
    {
        
        name: "Harina Trigo Integral (1kg)",
        price: 1750,
        category: "harinas",
        img: "/public/images/harina-integral.jpg",
        stock: 4,
        description: "Harina Integral, ideal para tus comidas"
    },
    {
        
        name: "Harina Trigo Integral (500g)",
        price: 950,
        category: "harinas",
        img: "/public/images/harina-integral.jpg",
        stock: 4,
        description: "Harina Integral, ideal para tus comidas"
    },
    {
        
        name: "Harina Trigo Integral (250g)",
        price: 550,
        category: "harinas",
        img: "/public/images/harina-integral.jpg",
        stock: 4,
        description: "Harina Integral, ideal para tus comidas"
    },
    {
        
        name: "Harina Almendra Tostada (1kg)",
        price: 5700,
        category: "harinas",
        img: "/public/images/harina-tostada.jpg",
        stock: 4,
        description: "Harina de Almendras Tostada, ideal para tus comidas"
    },
    {
        
        name: "Harina Trigo Tostada (500g)",
        price: 3000,
        category: "harinas",
        img: "/public/images/harina-tostada.jpg",
        stock: 4,
        description: "Harina de Almendras Tostada, ideal para tus comidas"
    },
    {
        
        name: "Harina Trigo Tostada (250g)",
        price: 1650,
        category: "harinas",
        img: "/public/images/harina-tostada.jpg",
        stock: 4,
        description: "Harina de Almendras Tostada, ideal para tus comidas"
    },
    {
        
        name: "Harina de Avena(1kg)",
        price: 2500,
        category: "harinas",
        img: "/public/images/harina-avena.jpg",
        stock: 4,
        description: "Harina de Avena, ideal para tus comidas"
    },
    {
        
        name: "Harina de Avena (500g)",
        price: 1400,
        category: "harinas",
        img: "/public/images/harina-avena.jpg",
        stock: 4,
        description: "Harina de Avena, ideal para tus comidas"
    },
    {
        
        name: "Harina de Avena (250g)",
        price: 900,
        category: "harinas",
        img: "/public/images/harina-avena.jpg",
        stock: 4,
        description: "Harina de Avena, ideal para tus comidas"
    },
    {
        
        name: "Pasta de Maní Natural",
        price: 3200,
        category: "pastademani",
        img: "/public/images/pasta-mani.jpg",
        stock: 4,
        description: "Pasta de Maní Entrenuts (370g)"
    },
    {
        
        name: "Pasta de Maní c/Stevia",
        price: 3200,
        category: "pastademani",
        img: "/public/images/pasta-mani.jpg",
        stock: 4,
        description: "Pasta de Maní Entrenuts (370g)"
    },
    {
        
        name: "Pasta de Maní Crunchy",
        price: 3200,
        category: "pastademani",
        img: "/public/images/pasta-mani.jpg",
        stock: 4,
        description: "Pasta de Maní Entrenuts (370g)"
    },
    {
        
        name: "Pasta de Maní c/Cacao",
        price: 3200,
        category: "pastademani",
        img: "/public/images/pasta-mani.jpg",
        stock: 4,
        description: "Pasta de Maní Entrenuts (370g)"
    },
    {
        
        name: "Pasta de Maní c/Coco",
        price: 3200,
        category: "pastademani",
        img: "/public/images/pasta-mani.jpg",
        stock: 4,
        description: "Pasta de Maní Entrenuts (370g)"
    },

];


export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products);
    }, 2000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        },2000);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 2000);
    });
};


export const subirProductosFake = async () => {
    const bactch = writeBatch(db)
    const productRef = collection(db, "products")

    products.forEach((item)=> {
        const nuevoDoc = doc(productRef);
        bactch.set(nuevoDoc, item)
    })

    try{
        await bactch.commit()
        console.log("Todos los productos han sido cargados")
    } catch (error) {
        console.log("Error al subir los productos", error)
    }
}
