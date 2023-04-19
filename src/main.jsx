import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import ProgramsRoot from "./routes/programs.jsx";
import ContactRoot from "./routes/contact.jsx";
import AboutUsRoot from "./routes/about.jsx";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCGDxvhn1b7WB7KRm0N7Iw6WCBWBD8ZaF0",
  authDomain: "solid-program.firebaseapp.com",
  projectId: "solid-program",
  storageBucket: "solid-program.appspot.com",
  messagingSenderId: "261126595832",
  appId: "1:261126595832:web:f5f555d3805e8fce0b870d",
  measurementId: "G-3ZTRXEM3QD",
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/programs",
    element: <ProgramsRoot />,
  },
  {
    path: "/contact",
    element: <ContactRoot />,
  },
  {
    path: "/about",
    element: <AboutUsRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
