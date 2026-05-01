# 🌱 ShambaLink

ShambaLink is a modern web platform designed to bridge the gap between local farmers and buyers. It empowers farmers to easily list their produce with rich media, and allows buyers to browse, place orders, and negotiate prices directly via WhatsApp.

## 🚀 Features

### For Farmers 🧑‍🌾
- **Account Management**: Secure authentication and profile management using Firebase.
- **Produce Listings**: Upload and manage produce with real-time Firestore updates.
- **Multi-Image Upload**: Add up to 5 high-quality photos per produce listing (stored securely in Firebase Storage).
- **Market Insights**: Track current market prices across different locations.

### For Buyers 🛒
- **Marketplace Browsing**: View all available produce from various farmers.
- **Smart Filtering**: Search produce by name or filter by specific locations.
- **Order Placement**: Place direct order requests specifying desired quantities.
- **WhatsApp Negotiation**: Initiate direct chats with farmers on WhatsApp with pre-filled produce details for easy negotiation.

## 🛠️ Technology Stack
- **Frontend**: React (built with Vite)
- **Backend Services**: Firebase (Authentication, Firestore Database, Firebase Storage)
- **Styling**: Vanilla CSS for a clean, responsive, and lightweight UI

## ⚙️ Setup and Installation

Follow these steps to set up and run ShambaLink locally:

### 1. Install Dependencies
Navigate to your project folder and install the required npm packages:
```bash
npm install
```

### 2. Firebase Configuration
You need to set up a Firebase project to run the backend services:
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Authentication**: Enable Email/Password authentication in the Authentication section.
3. **Firestore**: Create a Firestore database.
4. **Storage**: Enable Firebase Storage. **Important Note**: Make sure your `storageBucket` domain ends in `.appspot.com` to prevent upload hangs (e.g., `your-project-id.appspot.com`).
5. Copy your project settings and update `src/firebaseConfig.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com", // Use .appspot.com instead of .firebasestorage.app
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### 3. Run the Development Server
Start the Vite development server:
```bash
npm run dev
```
