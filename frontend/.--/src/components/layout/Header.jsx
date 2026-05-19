import { useContext, useState } from "react"
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"
import Button from "../common/Button"
import Modal from "../common/Modal"
import { ThemeContext } from "../../context/ThemeContext"
import { useCart } from "../../hooks/useCart"
import { useWishlist } from "../../hooks/useWishlist"
import { formatCurrency } from "../../utils/formatters"
import { createLinkHandler } from "../../utils/navigation"

function Header({ currentPath }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const {
    cartItems,
    itemCount,
    subtotal,
    isCartOpen,
    openCart,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart()
  const { wishlistCount } = useWishlist()

  return (
    <>
      <header className="site-header">
        <a href="/" className="brand" onClick={createLinkHandler("/")}>
          <span className="brand__mark">S</span>
          <span>
            <strong>SIRPAM</strong>
            <small>Handcrafted sculptural decor</small>
          </span>
        </a>

        <div className="site-header__desktop">
          <Navbar currentPath={currentPath} />
        </div>

        <div className="site-header__actions">
          <Button to="/collection" variant="ghost" size="sm">
            Saved {wishlistCount}
          </Button>
          <Button variant="outline" size="sm" onClick={openCart}>
            Cart {itemCount}
          </Button>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "sunlit" ? "midnight" : "sunlit"} theme`}
          >
            {theme === "sunlit" ? "PM" : "AM"}
          </button>
          <button
            type="button"
            className="icon-button site-header__menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        currentPath={currentPath}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <Modal
        isOpen={isCartOpen}
        onClose={closeCart}
        title="Cart overview"
        footer={
          <div className="cart-modal__footer">
            <div>
              <p className="eyebrow">Estimated subtotal</p>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <div className="cart-modal__actions">
              <Button variant="ghost" onClick={clearCart} disabled={!cartItems.length}>
                Clear
              </Button>
              <Button to="/contact" onClick={closeCart}>
                Request checkout help
              </Button>
            </div>
          </div>
        }
      >
        {cartItems.length ? (
          <div className="cart-modal__list">
            {cartItems.map((item) => (
              <article key={item.slug} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__image" />
                <div className="cart-item__content">
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.material}</p>
                  </div>
                  <div className="cart-item__meta">
                    <strong>{formatCurrency(item.price)}</strong>
                    <div className="cart-item__controls">
                      <button
                        type="button"
                        className="icon-button"
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        className="icon-button"
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="icon-button"
                        onClick={() => removeFromCart(item.slug)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h4>Your cart is empty</h4>
            <p>Start with a featured piece or build a custom brief for something made to fit your space.</p>
            <Button to="/collection" onClick={closeCart}>
              Browse collection
            </Button>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Header
