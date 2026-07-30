# 🚀 Proper Nutrition API

> Production-ready GraphQL API for an online healthy nutrition store built with **NestJS**, **GraphQL**, **Prisma**, and **PostgreSQL**.

![NestJS](https://img.shields.io/badge/NestJS-11-E0234E)
![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-E10098)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)

---

# 📖 About

Proper Nutrition API is a scalable backend for an e-commerce platform focused on healthy nutrition and sports supplements.

The application follows modern backend development practices and demonstrates building secure, maintainable and extensible APIs using the NestJS ecosystem.

The project includes authentication, GraphQL API, Prisma ORM, email integration, validation, security mechanisms and automated testing.

---

# ✨ Features

* 🔐 JWT Authentication
* 🍪 Cookie-based Authorization
* 🔑 Password Hashing (Argon2)
* 📦 GraphQL API
* 🗄 PostgreSQL Database
* ⚙ Prisma ORM
* 📧 Email Templates (React Email)
* ☁ Cloudflare Turnstile verification
* ✅ Validation & DTOs
* 🧪 Unit & E2E Tests
* 📁 Static file serving
* ⚡ Modular architecture

---

# 🛠 Tech Stack

## Framework

* NestJS 11
* TypeScript

## API

* GraphQL
* Apollo Server
* GraphQL Scalars

## Database

* PostgreSQL
* Prisma ORM

## Authentication

* JWT
* Passport
* Argon2
* Cookie Parser

## Validation

* class-validator
* class-transformer

## Email

* React Email
* Resend

## Testing

* Jest
* Supertest

---

# 🏗 Architecture

The backend is organized into independent feature modules following NestJS best practices.

Each module encapsulates its own:

* GraphQL resolvers
* Services
* Business logic
* DTOs
* Validation
* Database access

This architecture improves scalability, maintainability and testability.

---

# 🔒 Security

The application includes several production-oriented security mechanisms:

* JWT authentication
* Secure password hashing using Argon2
* Cookie authentication
* DTO validation
* Cloudflare Turnstile bot protection
* Environment variable configuration

---

# 🚀 Getting Started

```bash
git clone https://github.com/aleksandro001/proper-nutrition-back-end-shop-2026.git

cd proper-nutrition-back-end-shop-2026

npm install
```

Create an `.env` file.

Example:

```env
DATABASE_URL=
JWT_SECRET=
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
```

Run development server

```bash
npm run start:dev
```

---

# 📂 Suggested Project Structure

```text
src/
 ├── auth/
 ├── users/
 ├── products/
 ├── categories/
 ├── orders/
 ├── graphql/
 ├── prisma/
 ├── common/
 ├── mail/
 ├── config/
 └── main.ts
```

---

# 🧪 Available Scripts

```bash
npm run start:dev
```

Development server

```bash
npm run build
```

Production build

```bash
npm run start:prod
```

Run production server

```bash
npm run lint
```

Lint project

```bash
npm run test
```

Unit tests

```bash
npm run test:e2e
```

End-to-End tests

```bash
npm run test:cov
```

Coverage report

---

# 📡 GraphQL

The API exposes a GraphQL endpoint with strongly typed schemas and Prisma integration.

Example capabilities:

* Authentication
* Products
* Categories
* Orders
* User Profile
* Cart
* Favorites

---

# 🎯 What this project demonstrates

This project highlights practical experience with:

* Backend architecture using NestJS
* GraphQL API design
* Prisma ORM
* PostgreSQL integration
* Secure authentication
* Email workflows
* Input validation
* Modular application structure
* Automated testing
* Production-ready backend development

---

# 🔮 Roadmap

* Redis caching
* Background jobs (BullMQ)
* Rate limiting
* Swagger/OpenAPI
* Docker Compose
* CI/CD
* Monitoring
* Logging
* File storage (S3/MinIO)

---

# 👨‍💻 Author

**Aleksandr**

Frontend & Backend Engineer

GitHub: https://github.com/aleksandro001
