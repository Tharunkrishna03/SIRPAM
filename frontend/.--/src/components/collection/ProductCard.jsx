import Button from "../common/Button"
import { useCart } from "../../hooks/useCart"
import { useWishlist } from "../../hooks/useWishlist"
import { formatCurrency, formatRating } from "../../utils/formatters"
import { createLinkHandler } from "../../utils/navigation"

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const saved = isWishlisted(product.slug)

  return (
    <article className="product-card surface">
      <a
        href={`/collection/${product.slug}`}
        className="product-card__media-link"
        onClick={createLinkHandler(`/collection/${product.slug}`)}
      >
        <img src={product.image} alt={product.name} className="product-card__image" />
      </a>
      <div className="product-card__content">
        <div className="product-card__topline">
          <span>{product.category}</span>
          <span>{formatRating(product.rating)}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="product-card__meta">
          <span>{product.material}</span>
          <strong>{formatCurrency(product.price)}</strong>
        </div>
        <div className="product-card__actions">
          <Button to={`/collection/${product.slug}`} variant="ghost" size="sm">
            View details
          </Button>
          <Button variant={saved ? "outline" : "solid"} size="sm" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
          <button
            type="button"
            className={saved ? "chip-button is-active" : "chip-button"}
            onClick={() => toggleWishlist(product)}
            aria-pressed={saved}
          >
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
