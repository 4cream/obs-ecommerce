import { Dispatch, SetStateAction } from "react";

export type Props = {
  children: React.ReactNode
};

export type Product = {
    id: number;
    name: string;
    href: string;
    price: string;
    color: string;
    imageSrc: string;
    imageAlt: string;
};

export interface GlobalContextType {
  productsList: Product[] | null;
  setProductsList: Dispatch<SetStateAction<Product[] | null>>;
};