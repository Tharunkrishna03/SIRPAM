import { startTransition, useDeferredValue, useState } from "react"
import FilterSidebar from "../components/collection/FilterSidebar"
import ProductGrid from "../components/collection/ProductGrid"
import SortDropdown from "../components/collection/SortDropdown"
import SectionTitle from "../components/common/SectionTitle"
import { useFetch } from "../hooks/useFetch"
import { getProducts } from "../services/productService"
import { sortOptions } from "../utils/mockData"

const initialFilters = {
  query: "",
  category: "All",
  material: "All",
  featuredOnly: false,
}

const sortProducts = (items, sortBy) => {
  const sortedItems = [...items]

  switch (sortBy) {
    case "price-asc":
      return sortedItems.sort((left, right) => left.price - right.price)
    case "price-desc":
      return sortedItems.sort((left, right) => right.price - left.price)
    case "rating":
      return sortedItems.sort((left, right) => right.rating - left.rating)
    case "name":
      return sortedItems.sort((left, right) => left.name.localeCompare(right.name))
    case "featured":
    default:
      return sortedItems.sort((left, right) => Number(right.featured) - Number(left.featured))
  }
}

function Collection() {
  const { data: products = [], loading, error } = useFetch(getProducts, [], [])
  const [filters, setFilters] = useState(initialFilters)
  const [sortBy, setSortBy] = useState("featured")
  const deferredQuery = useDeferredValue(filters.query)

  const categories = ["All", ...new Set(products.map((product) => product.category))]
  const materials = ["All", ...new Set(products.map((product) => product.material))]

  const visibleProducts = sortProducts(
    products.filter((product) => {
      const matchesQuery =
        !deferredQuery ||
        `${product.name} ${product.category} ${product.material} ${product.collection}`
          .toLowerCase()
          .includes(deferredQuery.toLowerCase())

      const matchesCategory =
        filters.category === "All" || product.category === filters.category

      const matchesMaterial =
        filters.material === "All" || product.material === filters.material

      const matchesFeatured = !filters.featuredOnly || product.featured

      return matchesQuery && matchesCategory && matchesMaterial && matchesFeatured
    }),
    sortBy,
  )

  return (
    <div className="page-section">
      <SectionTitle
        eyebrow="Collection"
        title="Sculptural decor with earthy finishes and architectural balance."
        description="Browse ready-to-ship forms and made-to-order favorites. Filter by category, material, or featured edit."
      />

      <div className="collection-toolbar">
        <p>{visibleProducts.length} pieces available</p>
        <SortDropdown
          value={sortBy}
          options={sortOptions}
          onChange={(event) => setSortBy(event.target.value)}
        />
      </div>

      <div className="collection-layout">
        <FilterSidebar
          filters={filters}
          categories={categories}
          materials={materials}
          onSearchChange={(event) =>
            startTransition(() =>
              setFilters((currentFilters) => ({
                ...currentFilters,
                query: event.target.value,
              })),
            )
          }
          onCategoryChange={(category) =>
            startTransition(() =>
              setFilters((currentFilters) => ({ ...currentFilters, category })),
            )
          }
          onMaterialChange={(material) =>
            startTransition(() =>
              setFilters((currentFilters) => ({ ...currentFilters, material })),
            )
          }
          onFeaturedToggle={(event) =>
            startTransition(() =>
              setFilters((currentFilters) => ({
                ...currentFilters,
                featuredOnly: event.target.checked,
              })),
            )
          }
        />

        <div className="collection-layout__results">
          {error ? <p className="status-message status-message--error">{error.message}</p> : null}
          <ProductGrid
            products={visibleProducts}
            loading={loading}
            emptyMessage="Try clearing a filter or searching for a broader material family."
          />
        </div>
      </div>
    </div>
  )
}

export default Collection
