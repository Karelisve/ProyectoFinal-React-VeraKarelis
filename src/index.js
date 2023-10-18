import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFj6s0mMSa6ZIz6NWi--LV_El_UYcD-0M",
  authDomain: "potustienda.firebaseapp.com",
  projectId: "potustienda",
  storageBucket: "potustienda.appspot.com",
  messagingSenderId: "272500971539",
  appId: "1:272500971539:web:2292b4b03715e30a2887e6"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
