import { useEffect, useState } from "react";
import { API } from "../global";
import { Product } from "./Product";




export function Products() {


  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://vrentalapp.herokuapp.com/products", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        // console.log(products)
        // console.log(data)
      })
  }, [])


  // console.log(products)
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-container">
        {products.map(({ name, type, image, price, _id }, index) => <Product key={index} type={type} image={image} name={name} price={price} id={_id} />)}
      </div>
    </div>
  );
}
