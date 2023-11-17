import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./Utils/router";
import "./App.css"

function App() {
  // Use routing defined in ./Utils/router.js
  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default App;
