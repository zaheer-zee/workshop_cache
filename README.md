# workshop_cache

An Express.js REST API demonstrating in-memory caching and cache invalidation strategies for product resources.

## Features
- **Product REST API**: Full CRUD operations (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) for managing products.
- **In-Memory Caching**: Custom cache middleware storing responses in memory with a 60-second TTL.
- **Cache Headers**: Informs client with `X-Cache: HIT` or `X-Cache: MISS` headers.
- **Cache Invalidation**: Automatic cache clearance whenever data is created, updated, or removed.
- **File Database**: Local JSON persistence using `db.json`.

## Getting Started

### Installation
```bash
npm install
```

### Running the Server
```bash
node server.js
```
The server will run on `http://localhost:3000`.

### API Endpoints
- `GET /products` - Fetch all products (cached)
- `GET /products/:id` - Fetch product by ID (cached)
- `POST /products` - Create product (clears cache)
- `PUT /products/:id` - Update product (clears cache)
- `PATCH /products/:id` - Patch product (clears cache)
- `DELETE /products/:id` - Remove product (clears cache)
