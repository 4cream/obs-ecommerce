import { useNavigate  } from "react-router-dom";
import { Product } from "../../interfaces-and-types";

interface CardProps {
  productsList: Product[];
}

  function Cards({productsList}:CardProps):JSX.Element {
    const navigate = useNavigate();

    const productOverview = (id:number) => {
      const productFound = productsList.find(product => product.id === id);
      console.log("El producto filtrado es = ", productFound);

      navigate(`/products/${productFound?.id}`, { state: productFound });

      // navigate(-2) // Navega dos pasos hacia atrás, esto funcionó acá;
      // navigate('..', { relative: "path"});
    }

    return (
      <>
        {productsList.map((product) => (
          <article key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a onClick={() => productOverview(product.id)}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </article>
        ))}
      </>
    )
  }
  
export {Cards}