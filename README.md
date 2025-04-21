# 🛒 Product Dashboard (React + Django Rest Framework)

## 🔄 API Endpoints

- `POST /api/token/` – Get JWT tokens (access + refresh)
- `POST /api/token/verify/` – Validate JWT token
- `POST /api/token/refresh/` – Refresh JWT token
- `GET /api/products/` – Get list of products (protected)
- `GET /api/products/<id>` – Get detail view of a product
- `PUT /api/<id>/update/` – Update a product
- `DELETE /api/<id>/delete/` – Delete a product

## 🔧 Tech Stack

**Frontend:**
- React
- Axios
- MDB React UI Kit (for pre-built UI components)

**Backend:**
- Django
- Django REST Framework (DRF)
- Simple JWT (for authentication)

## 🛠️ Project Setup Guide

This guide walks you through setting up both the Django backend and React frontend for your product dashboard.

```bash
# Clone the repo
git clone https://github.com/ankush2413/RestApi.git
```
---
### 🚀 Backend Setup 
```bash
cd backend
python -m venv env
source env/bin/activate   # Use 'env\Scripts\activate' on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py makemigrations
python manage.py createsuperuser
python manage.py runserver
```
### 📦 Frontend Setup
```bash
cd UI/buyone
npm install
npm run dev
```
## 🔗 Useful Links

- Django Admin: http://localhost:8000/admin/
- React App: http://localhost:5173/login
---

## 🙌 Thanks for checking this out! Feel free to ⭐ the repo if you found it helpful.
