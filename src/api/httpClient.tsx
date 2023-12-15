// import {Product} from '../interfaces-and-types/index';

// create a fetch function to get the data from the const products array
// export const fetchProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products);
//         }, 1000);
//     });
// };

// fetch function to get the data from the backend API
export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:1234/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
    

// const products: Product[] = [
//     {
//         id: 1,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },
//     {
//         id: 2,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Aspen White',
//       },
//     {
//         id: 3,
//         name: 'Basic',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Charcoal',
//       },
//     {
//         id: 4,
//         name: 'Artwork Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Iso Dots',
//       },
// ];