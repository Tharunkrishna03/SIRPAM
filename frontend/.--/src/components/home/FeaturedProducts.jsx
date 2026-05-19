import ProductGrid from "../collection/ProductGrid"
import Loader from "../common/Loader"
import SectionTitle from "../common/SectionTitle"
import { useFetch } from "../../hooks/useFetch"
import { getFeaturedProducts } from "../../services/productService"

function FeaturedProducts() {
  const {
    data: featuredProducts = [],
    loading,
    error,
  } = useFetch(getFeaturedProducts, [], [])

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Featured collection"
        title="Made to stand alone and to layer beautifully."
        description="A rotating edit of handcrafted pieces with warm finishes, textural silhouettes, and quiet statement energy."
      />

      {loading ? <Loader label="Loading featured work..." /> : null}
      {error ? <p className="status-message status-message--error">{error.message}</p> : null}
      {!loading && !error ? <ProductGrid products={featuredProducts} /> : null}
    </section>
  )
}

export default FeaturedProducts
