import { useEffect, useState } from "react"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Customize from "./pages/Customize"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./pages/NotFound"
import { useScrollToTop } from "./hooks/useScrollToTop"
import { normalizePath } from "./utils/navigation"

const resolveRoute = (pathname) => {
  const normalizedPath = normalizePath(pathname)

  if (normalizedPath === "/") {
    return <Home />
  }

  if (normalizedPath === "/collection") {
    return <Collection />
  }

  if (normalizedPath.startsWith("/collection/")) {
    return <ProductDetails slug={normalizedPath.replace("/collection/", "")} />
  }

  if (normalizedPath === "/customize") {
    return <Customize />
  }

  if (normalizedPath === "/gallery") {
    return <Gallery />
  }

  if (normalizedPath === "/contact") {
    return <Contact />
  }

  return <NotFound />
}

export default function App() {
  const [pathname, setPathname] = useState(() =>
    normalizePath(window.location.pathname),
  )

  useScrollToTop(pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    window.addEventListener("popstate", handleLocationChange)
    window.addEventListener("sirpam:navigate", handleLocationChange)

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      window.removeEventListener("sirpam:navigate", handleLocationChange)
    }
  }, [])

  return (
    <div className="site-shell">
      <Header currentPath={pathname} />
      <main className="site-main">{resolveRoute(pathname)}</main>
      <Footer />
    </div>
  )
}
