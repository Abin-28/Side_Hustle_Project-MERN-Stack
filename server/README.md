# Server (Express + MongoDB)

This directory contains the Express API for the Hayroo MERN e‑commerce app. It exposes endpoints for authentication, categories, products with image uploads, orders, users, and checkout via Braintree.

## Features

- JWT auth with role‑based access (admin vs customer)
- Categories CRUD (image upload)
- Products CRUD (two images required), reviews
- Users and Orders endpoints
- Braintree Sandbox payments
- Static serving of uploaded images from `public/`

## Structure

- `app.js`: server entry; connects MongoDB; mounts routes
- `routes/`: route files for auth, categories, products, orders, users, braintree
- `controller/`: handlers/business logic
- `models/`: Mongoose schemas
- `middleware/auth.js`: `loginCheck`, `isAuth`, `isAdmin`
- `config/keys.js`: JWT secret (consider moving to `.env`)
- `config/uploadFolderCreateScript.js`: ensures upload folders exist
- `public/uploads/`: runtime image storage (not committed)

## Environment (.env)

Create `server/.env`:

```
DATABASE=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/hayroo?retryWrites=true&w=majority
PORT=8000
BRAINTREE_MERCHANT_ID=your_sandbox_merchant_id
BRAINTREE_PUBLIC_KEY=your_sandbox_public_key
BRAINTREE_PRIVATE_KEY=your_sandbox_private_key
JWT_SECRET=your_secret_here
```

Notes:
- Local Mongo alternative: `mongodb://localhost:27017/hayroo`
- Code currently reads JWT secret from `config/keys.js`; keep both consistent or refactor to env.

## Connect to MongoDB (Atlas)

1. Sign up at `https://www.mongodb.com/cloud/atlas`.
2. Create a free cluster.
3. Create a DB user (username/password).
4. Network Access → add your IP (or 0.0.0.0/0 for testing).
5. Connect → Drivers → copy the URI and replace placeholders.
6. Paste into `DATABASE` in `.env`.

## Install & run

```
npm install
npm run start:dev
```

Expected logs:

```
==============Mongodb Database Connected Successfully==============
Server is running on  8000
```

## Routes (summary)

- Auth: `POST /api/signup`, `POST /api/signin`, `POST /api/isadmin`, `POST /api/user`
- Category: `GET /api/category/all-category`, `POST /api/category/add-category`, `POST /api/category/edit-category`, `POST /api/category/delete-category`
- Product: `GET /api/product/all-product`, `POST /api/product/add-product`, `POST /api/product/edit-product`, `POST /api/product/delete-product`, `POST /api/product/single-product`, `POST /api/product/product-by-category`, `POST /api/product/product-by-price`, `POST /api/product/wish-product`, `POST /api/product/cart-product`, `POST /api/product/add-review`, `POST /api/product/delete-review`
- Braintree: `POST /api/braintree/get-token`, `POST /api/braintree/payment`

## Image uploads

- Categories → `public/uploads/categories`
- Products → `public/uploads/products`

Folders are auto‑created; contents are ignored by Git.

## Admin signup note

Only the very first user who signs up is assigned admin (`userRole: 1`). All subsequent signups are customers (`userRole: 0`). If you need to change roles later, add an admin‑only route to promote a user.

## Troubleshooting

- "Database Not Connected": check `.env` `DATABASE` and Atlas IP allowlist.
- Payment errors: set Braintree Sandbox keys, or skip checkout locally.
- Windows + Node 18/20 (client): use the OpenSSL legacy flag (see client README).
