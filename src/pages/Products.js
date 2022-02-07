import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { API } from "../global";
import { Product } from "./Product";




export function Products() {


  const [products, setProducts] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [show, setShow] = useState(false)


  useEffect(() => {
    fetch(`${API}/products`, {
      method: "GET",
      headers: { "x-auth-token": token }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
      .then(() => setShow(true))
  }, [])

  // const { products } = useContext(Context)
  // console.log(products)
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-container">
        {show && products.map(({ name, type, image, price, _id }, index) => <Product key={index} type={type} image={image} name={name} price={price} id={_id} />)}
      </div>
    </div>
  );
}
