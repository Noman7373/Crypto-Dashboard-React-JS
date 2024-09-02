import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

import TransactionPage from "./pages/Transactions/TransactionPage";
import Support from "./pages/support/Support";
import Signup from "./pages/Auth/signup/Signup";
import Signin from "./pages/Auth/singin/Signin";
import Registrationemail from "./pages/Auth/Registrationemail/Registersuccess";
import Registersuccess from "./pages/Auth/Registrationemail/Registersuccess";
import Forgotpassword from "./pages/Auth/Forgotpasswrod/Forgotpassword";

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
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register-verify-email",
      element: <Registrationemail />,
    },
    {
      path: "/register-success",
      element: <Registersuccess />,
    },
    {
      path: "/forgot-password",
      element: <Forgotpassword />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
