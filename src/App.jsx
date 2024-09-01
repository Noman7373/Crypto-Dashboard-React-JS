import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

import TransactionPage from "./pages/Transactions/TransactionPage";
import Support from "./pages/support/Support";
import Signup from "./pages/Auth/signup/Signup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <TransactionPage />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
