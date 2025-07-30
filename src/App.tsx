import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Moños Dulce - Tu tienda de fiestas";
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
