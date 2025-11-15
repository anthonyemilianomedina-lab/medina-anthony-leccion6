import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGM-oaXnFh9k7Z7zNykDtexFBEtoPp0lc",
  authDomain: "medina-anthony2025-c9574.firebaseapp.com",
  projectId: "medina-anthony2025-c9574",
  storageBucket: "medina-anthony2025-c9574.firebasestorage.app",
  messagingSenderId: "449537794321",
  appId: "1:449537794321:web:bd4b36092055cd5929acb0",
  databaseURL: "https://medina-anthony2025-c9574-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
