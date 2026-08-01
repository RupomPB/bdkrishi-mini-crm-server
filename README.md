# 🌱 BDKrishi Mini CRM - Server

![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue)

Backend REST API for the **BDKrishi Mini CRM** application. Built with **Node.js, Express.js, MongoDB, and JWT Authentication**, this server provides secure authentication, customer management, lead management, and dashboard analytics APIs.

---

# 📂 Repository

## GitHub Repository

https://github.com/RupomPB/bdkrishi-mini-crm-server

---

# ✨ Features

## 🔐 Authentication

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Password Hashing (bcryptjs)
- ✅ Protected Routes

---

## 👥 Customer Management

- ✅ Create Customer
- ✅ Get All Customers
- ✅ Get Single Customer
- ✅ Update Customer
- ✅ Delete Customer

---

## 🎯 Lead Management

- ✅ Create Lead
- ✅ Get All Leads
- ✅ Get Single Lead
- ✅ Update Lead
- ✅ Delete Lead
- ✅ Customer Reference (Populate)

---

## 📊 Dashboard API

- ✅ Total Customers
- ✅ Total Leads
- ✅ Won Leads
- ✅ Lost Leads
- ✅ Recent Customers
- ✅ Recent Leads
- ✅ Dashboard Statistics

---

## 🔒 Security

- ✅ JWT Token Verification
- ✅ Protected API Routes
- ✅ Environment Variables
- ✅ Password Encryption
- ✅ CORS Enabled

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| dotenv | Environment Variables |
| cors | Cross-Origin Requests |

---

# 📁 Folder Structure

```bash
server
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── customerController.js
│   ├── dashboardController.js
│   └── leadController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   ├── Customer.js
│   └── Lead.js
│
├── routes
│   ├── authRoutes.js
│   ├── customerRoutes.js
│   ├── dashboardRoutes.js
│   └── leadRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/RupomPB/bdkrishi-mini-crm-server.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Run Production Server

```bash
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the project root.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📦 REST API

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Customers

### Get All Customers

```http
GET /api/customers
```

### Create Customer

```http
POST /api/customers
```

### Update Customer

```http
PUT /api/customers/:id
```

### Delete Customer

```http
DELETE /api/customers/:id
```

---

## Leads

### Get All Leads

```http
GET /api/leads
```

### Create Lead

```http
POST /api/leads
```

### Update Lead

```http
PUT /api/leads/:id
```

### Delete Lead

```http
DELETE /api/leads/:id
```

---

## Dashboard

### Dashboard Statistics

```http
GET /api/dashboard
```

---

# 📊 Database Models

## User

- Name
- Email
- Password
- Role

---

## Customer

- Name
- Email
- Phone
- Company
- Status
- Assigned User

---

## Lead

- Title
- Customer
- Status
- Priority
- Description

---

# 🚀 Future Improvements

- 🔍 Search API
- 📄 Pagination
- 🎯 Advanced Filtering
- 📊 Advanced Analytics
- 📁 CSV Export
- 🔔 Notifications
- 👥 Role Based Authorization
- 📱 API Rate Limiting
- 📝 Request Validation

---

# 👨‍💻 Author

## Rupom Prosad Badhan

**Frontend / MERN Stack Developer**

### GitHub

https://github.com/RupomPB

### LinkedIn

https://www.linkedin.com/in/rupom-pb/

### Portfolio

https://portfolio-gamma-seven-dsp20g2nki.vercel.app

---

# ⭐ Support

If you like this project, please give the repository a **⭐ Star**.

---

## 📄 License

This project is licensed under the **MIT License**.

---

### Built with ❤️ by Rupom Prosad Badhan