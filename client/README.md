## Client (React) – AuroraMart E‑commerce

This is the React front‑end for the AuroraMart MERN e‑commerce application. It provides the customer‑facing shop, authentication, product browsing, cart/checkout UI, reviews, and a basic admin interface (under `components/admin`) to manage categories, products, and orders.

### What the client does

- Customer shop flow (under `src/shop/`):
  - Home, product listing by category/price, product details with reviews
  - Wishlist and Cart views, Checkout flow (Braintree payment UI)
  - User auth (login/signup) and protected routes
  - User dashboard: profile, orders, settings
- Admin (under `src/components/admin/`):
  - Manage categories (create/edit/delete with image upload)
  - Manage products (create/edit/delete with images, price, offer, status)
  - View orders and dashboard metrics
- Shared UI (under `src/shop/partials/`): navbar, cart modal, footer, etc.

The client talks to the Express API served by the `server/` at `http://localhost:8000/api` by default. Axios is used for HTTP calls and JWT is used for authentication.

### Prerequisites

- Node.js installed
- Back‑end server running (see `../server/README.md`)

### Install & run

```
npm install
```

Start the development server:

```
npm start
```

If you see an OpenSSL/webpack error on newer Node versions (Node 18/20):

- One‑time run for your current shell:

```
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

- Or update `package.json` start script to set the flag automatically on Windows:

```
"start": "set NODE_OPTIONS=--openssl-legacy-provider&& react-scripts start"
```

Open http://localhost:3000

### Build for production

```
npm run build
```

Outputs files to `build/` (ignored in VCS).

### First‑time usage flow (important)

When you run the app for the first time, the shop will look empty because no categories/products exist yet. To populate data:

1. Create an admin user (see server README) and log in.
2. Go to the admin panel in the UI.
3. Add categories (with images), then add products under those categories.
4. Return to the shop view; products now appear for customers.

Reviews and orders will also start to show once users interact with products and complete checkout.
