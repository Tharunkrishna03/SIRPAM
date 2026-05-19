import { galleryItems, products } from "../utils/mockData"
import { simulateRequest } from "./api"

export const getProducts = () => simulateRequest(() => products, 220)

export const getFeaturedProducts = () =>
  simulateRequest(() => products.filter((product) => product.featured), 260)

export const getProductBySlug = (slug) =>
  simulateRequest(() => {
    const product = products.find((item) => item.slug === slug)

    if (!product) {
      throw new Error("Product not found")
    }

    return product
  }, 240)

export const getGalleryItems = () => simulateRequest(() => galleryItems, 200)
