import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import router from "./Components/Router";
import "./styles/App.css";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto px-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
