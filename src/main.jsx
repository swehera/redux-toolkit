import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AllTodo from "./components/AllTodo.jsx";
import { PersistGate } from "redux-persist/integration/react";

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Header />
        <Outlet />
      </PersistGate>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/alltodo",
        element: <AllTodo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
