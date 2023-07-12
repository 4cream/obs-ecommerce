import { createContext, useEffect, useState } from "react";
import { getApiProducts } from "../api/httpClient";

const globalContext = createContext(); 

function GlobalProvider({children}) {

    const [productsLIst, setProductsList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            const productFetched = await getApiProducts(); // parece que puedo quitar el await
            setProductsList(productFetched);         
        }

        getProductList();
        
    }, []);

    return (
        <globalContext.Provider value={[
            productsLIst,
            setProductsList
        ]}>
            {children}
        </globalContext.Provider>
    )
}

export {GlobalProvider}