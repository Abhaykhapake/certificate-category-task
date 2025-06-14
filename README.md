

##  Task Overview

1. **Backend (Node.js + Express):**
   - Set up a MySQL (or MySQL) database.
   - Created two tables:
     - certificate_categories (Master table)
     - questions (Detail table with foreign key)
   - Built APIs to:
     - Add category
     - Add questions with associated category
     - Fetch all categories and related questions

2. **Frontend (React + Vite):**
   - Created UI to:
     - Add new certificate categories
     - Add questions under specific categories
     - Display list of questions with categories


##  How to Run

### Backend

cd backend
npm install
node index.js

### Frontend
cd frontend
npm install
npm run dev

***Make sure your backend is running on port 5000 and frontend on 5173***
