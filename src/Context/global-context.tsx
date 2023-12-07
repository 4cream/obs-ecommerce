import { createContext, useEffect, useState, useContext } from "react";
import {Props, Product, GlobalContextType} from '../interfaces-and-types/index';
import { fetchProducts } from "../api/httpClient";

const globalContext = createContext<GlobalContextType | null>(null);

function GlobalProvider({children}:Props) {

    const [productsList, setProductsList] = useState<Product[] | null>(null);
    // const [productsList, setProductsList] = useState<Product[]>([]);

    const contextValue: GlobalContextType = {
        productsList,
        setProductsList,
    };

    useEffect(() => {
        fetchProducts()
            .then((products) => {
                console.log(products);
                setProductsList(products as Product[]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(globalContext);
  
    if (!context) {
      throw new Error("useGlobalContext debe ser utilizado dentro de un GlobalProvider");
    }
  
    return context;
  }

export {globalContext, GlobalProvider, useGlobalContext}