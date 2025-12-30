# 🛒 Fullstack Angular E-Commerce App

A full-featured E-Commerce web application built with **Angular**, following clean architecture and best practices.  
The project simulates a real-world online store with product management, authentication, orders, and API integration using a mock backend.

---

## 🚀 Features

- 🔐 Authentication & Route Guards
- 🏠 Home & Product Listing
- 📦 Product Details Page
- ➕ Add / ❌ Delete Products
- 🛍 Orders Management
- 🔔 Notification Service
- 🎨 Custom Directives & Pipes
- 🧱 Modular & Scalable Structure
- 🌐 API Integration using JSON Server
- ❌ Not Found (404) Page

---

## 🧩 Technologies Used

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Backend (Mock API)
- JSON Server
- RESTful APIs

---

## 📂 Project Structure


ECOMMERCEAPP/
│
├── server/ # Mock backend (JSON Server)
│ ├── db.json
│ └── package.json
│
├── src/
│ ├── app/
│ │ ├── components/
│ │ ├── services/
│ │ ├── guards/
│ │ ├── directives/
│ │ ├── pipes/
│ │ └── models/
│ └── environments/
│
└── angular.json

---

## ⚙️ Installation & Run

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Khaledmhmdd/Angular-E-Commerce-App-JSON-Server.git
cd fullstack-angular-ecommerce

npm install

ng serve

cd server
npm install
npm start

export const environment = {
  apiUrl: 'http://localhost:3000'
};
