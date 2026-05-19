import Button from "../components/common/Button"
import Loader from "../components/common/Loader"
import { useCart } from "../hooks/useCart"
import { useFetch } from "../hooks/useFetch"
import { useWishlist } from "../hooks/useWishlist"
import { getProductBySlug } from "../services/productService"
import { formatCurrency, formatRating } from "../utils/formatters"
import NotFound from "./NotFound"

function ProductDetails({ slug }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const { data: product, loading, error } = useFetch(() => getProductBySlug(slug), [slug], null)

  if (loading) {
    return (
      <section className="page-section">
        <Loader label="Loading product details..." />
      </section>
    )
  }

  if (error || !product) {
    return (
      <NotFound
        title="This piece is no longer in the archive."
        description="The product link may have changed, or the item has moved out of the current collection."
      />
    )
  }

  const saved = isWishlisted(product.slug)

  return (
    <section className="page-section">
      <div className="product-detail surface surface--highlight">
        <img src={product.image} alt={product.name} className="product-detail__image" />
        <div className="product-detail__content">
          <p className="eyebrow">{product.collection}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__summary">{product.description}</p>

          <div className="product-detail__facts">
            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Material</span>
              <strong>{product.material}</strong>
            </div>
            <div>
              <span>Lead time</span>
              <strong>{product.leadTime}</strong>
            </div>
            <div>
              <span>Rating</span>
              <strong>{formatRating(product.rating)}</strong>
            </div>
          </div>

          <div className="product-detail__pricing">
            <strong>{formatCurrency(product.price)}</strong>
            <span>{product.dimensions}</span>
            <span>{product.finish}</span>
          </div>

          <div className="product-detail__actions">
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
            <Button variant="ghost" onClick={() => toggleWishlist(product)}>
              {saved ? "Saved to collection" : "Save for later"}
            </Button>
            <Button to="/customize" variant="outline">
              Customize this silhouette
            </Button>
          </div>

          <div className="product-detail__notes">
            <h3>Studio notes</h3>
            <ul>
              {product.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
