# Gym App Backend

## Setup
1. Navigate to the `backend` folder: `cd backend`
2. Install dependencies: `npm install`
3. Ensure MongoDB is running locally on port 27017.
   - If you don't have MongoDB, install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
4. Start the server: `npm start` (or `node server.js`)

## API Endpoints
- **POST /api/auth/register**: Register a new user.
  - Body: `{ name, email, password, age, gender, height, weight, goal }`
- **POST /api/auth/login**: Login a user.
  - Body: `{ email, password }`

## Frontend Integration
The frontend is configured to communicate with `http://localhost:5000`.
Ensure this backend server is running while using the app.
