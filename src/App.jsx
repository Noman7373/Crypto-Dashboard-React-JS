import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

import TransactionPage from "./pages/Transactions/TransactionPage";
import Support from "./pages/support/Support";
import Signup from "./pages/Auth/signup/Signup";
import Signin from "./pages/Auth/singin/Signin";

import Forgotpassword from "./pages/Auth/Forgotpasswrod/Forgotpassword";
import Forgotpasswordsent from "./pages/Auth/Forgotpasswordsent/Forgotpasswordsent";
import Registrationemail from "./pages/Auth/Registersuccess/Registrationemail";
import VerificationSuccess from "./pages/Auth/VerificationSuccess/VerificationSuccess";
import Resetpasswordsucess from "./pages/Auth/Resetpassword/Resetpasswordsucess";
import PasswordReset from "./pages/Auth/PasswordReset/PasswordReset";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
    path: "/email-verification-success",
    element: <VerificationSuccess />,
  },

  {
    path: "/forgot-password",
    element: <Forgotpassword />,
  },
  {
    path: "/forgot-success",
    element: <Forgotpasswordsent />,
  },
  {
    path: "/reset-password",
    element: <PasswordReset />,
  },
  {
    path: "/reset-password-success",
    element: <Resetpasswordsucess />,
  },
]);


const App = () => {
  // using  React Query
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
