import { createContext, startTransition, useEffect, useState } from "react"
import { readStorage, writeStorage } from "../utils/storage"

const STORAGE_KEY = "sirpam-wishlist"

export const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => readStorage(STORAGE_KEY, []))

  useEffect(() => {
    writeStorage(STORAGE_KEY, wishlist)
  }, [wishlist])

  const toggleWishlist = (product) => {
    startTransition(() => {
      setWishlist((currentWishlist) =>
        currentWishlist.includes(product.slug)
          ? currentWishlist.filter((slug) => slug !== product.slug)
          : [...currentWishlist, product.slug],
      )
    })
  }

  const isWishlisted = (slug) => wishlist.includes(slug)

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
