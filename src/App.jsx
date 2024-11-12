import {RouterProvider} from "react-router-dom";
import router from "./router/index.jsx"
import store from "./redux/store.js";
import {RouterAuth} from "./router/routerAuth.jsx";

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
