# FridgeApp

A full-stack React Native app with Node.js backend for managing fridge inventory.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Expo CLI (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd FridgeApp
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up Environment Variables**
   - Create `.env` file in `backend/` directory
   - Add your MongoDB connection string:
   ```
   MONGO_URI="mongodb://localhost:27017/fridge"
   ```
   - For MongoDB Atlas, use:
   ```
   MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority"
   ```

## 🏃‍♂️ Running the Application

### Backend
```bash
cd backend
node server.js
```
Server will run on `http://localhost:5000`

### Frontend
```bash
cd frontend
npx expo start
```
Scan QR code with Expo Go app or run in browser.

## 📁 Project Structure

```
FridgeApp/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   ├── services/       # Business logic
│   ├── app.js         # Express app setup
│   └── server.js      # Server entry point
├── frontend/
│   ├── app/           # React Native screens
│   ├── components/    # Reusable components
│   ├── api/          # API utilities
│   └── App.js        # Main app component
└── README.md
```

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product

### Example POST Request
```json
{
  "name": "Milk",
  "quantity": 5,
  "expiration": "2024-12-31"
}
```

## 🛠️ Development

### Backend Development
- Uses Express.js with MongoDB
- MVC architecture with service layer
- CORS enabled for frontend communication

### Frontend Development
- React Native with Expo
- Uses expo-router for navigation
- Axios for API communication

## 📱 Testing

Use the included HTTP file to test API endpoints:
```bash
# Open in your IDE with REST Client extension
backend/api-tests.http
```

## 🚀 Deployment

### Backend
- Deploy to Heroku, Railway, or AWS
- Set environment variables in production

### Frontend
- Build for iOS/Android using Expo
- Deploy to app stores

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.