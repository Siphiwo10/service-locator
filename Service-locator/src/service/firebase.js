import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "Service-locator",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

export const app = initializeApp(firebaseConfig);

