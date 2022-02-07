import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { API } from "../global";
import { Product } from "./Product";




export function Products() {


  const [products, setProducts] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    fetch("https://vrentalapp.herokuapp.com/products", {
      method: "GET",
      headers: { "x-auth-token": token }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // const { products } = useContext(Context)
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
