# SIRPAM Frontend

A React + Vite storefront scaffold for a handcrafted decor brand. The app includes:

- A custom home experience with featured products, process, and testimonials
- A collection page with filtering and sorting
- Product detail, gallery, customize, contact, and not-found pages
- Shared context for cart, wishlist, and theme state
- Mocked service modules so the UI is wired before a backend exists

## Project Structure

```text
frontend/.--/
├── public/
│   ├── images/
│   ├── videos/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── collection/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── customize/
│   │   ├── gallery/
│   │   ├── home/
│   │   └── layout/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   └── utils/
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates the production build
- `npm run preview` previews the production build
