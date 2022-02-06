import { useState } from "react"
import React, { useEffect } from "react"


const Context = React.createContext()

function ContextProvider({ children }) {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        fetch("https://vrentalapp.herokuapp.com/products", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    function addToCart(newItem) {
        setCartItems([...cartItems, newItem])
    }
    function removeFromCart(img) {
        const updatedArr = cartItems.filter(item => item.id !== img.id)
        setCartItems(updatedArr)
    }

    return (
        <Context.Provider value={{ products, setProducts, addToCart, cartItems, removeFromCart, setCartItems }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }