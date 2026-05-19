import { createContext, startTransition, useEffect, useState } from "react"
import { readStorage, writeStorage } from "../utils/storage"

const STORAGE_KEY = "sirpam-cart"

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readStorage(STORAGE_KEY, []))
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    writeStorage(STORAGE_KEY, cartItems)
  }, [cartItems])

  const addToCart = (product) => {
    startTransition(() => {
      setCartItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.slug === product.slug)

        if (existingItem) {
          return currentItems.map((item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        }

        return [
          ...currentItems,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            material: product.material,
            quantity: 1,
          },
        ]
      })
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (slug) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.slug !== slug))
  }

  const updateQuantity = (slug, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => (item.slug === slug ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const clearCart = () => setCartItems([])

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (runningTotal, item) => runningTotal + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
