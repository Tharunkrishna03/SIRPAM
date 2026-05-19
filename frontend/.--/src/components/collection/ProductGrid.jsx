import Loader from "../common/Loader"
import ProductCard from "./ProductCard"

function ProductGrid({ products, loading = false, emptyMessage = "No pieces match these filters yet." }) {
  if (loading) {
    return <Loader label="Loading collection..." />
  }

  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No matches found</h3>
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
