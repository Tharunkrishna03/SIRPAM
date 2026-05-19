import { useState } from "react"
import GalleryGrid from "../components/gallery/GalleryGrid"
import Lightbox from "../components/gallery/Lightbox"
import SectionTitle from "../components/common/SectionTitle"
import Loader from "../components/common/Loader"
import { useFetch } from "../hooks/useFetch"
import { getGalleryItems } from "../services/productService"

function Gallery() {
  const { data: galleryItems = [], loading, error } = useFetch(getGalleryItems, [], [])
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Installed work"
        title="A look at finished pieces in calm, layered interiors."
        description="See the collection styled in entryways, hospitality settings, console vignettes, and evening courtyard scenes."
      />

      {loading ? <Loader label="Loading gallery..." /> : null}
      {error ? <p className="status-message status-message--error">{error.message}</p> : null}
      {!loading && !error ? (
        <>
          <GalleryGrid items={galleryItems} onSelect={setSelectedIndex} />
          <Lightbox
            items={galleryItems}
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onPrev={() =>
              setSelectedIndex((currentIndex) =>
                currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1,
              )
            }
            onNext={() =>
              setSelectedIndex((currentIndex) =>
                currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1,
              )
            }
          />
        </>
      ) : null}
    </section>
  )
}

export default Gallery
