import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import Tracking from "./pages/Tracking";
import Pricing from "./pages/Pricing";
import QnA from "./pages/QnA";
import Contact from "./pages/Contact";
import DeleteAccount from "./pages/DeleteAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/tracking",
        element: <Tracking />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/QnA",
        element: <QnA />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/delete-account",
        element: <DeleteAccount />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
export default router;

// createRoutesFromElements(
//   <Route path="/" element={<Home />}>
//     <Route path="/tracking" element={<Tracking />} />
//     <Route path="/pricing" element={<Pricing />} />
//     <Route path="/qna" element={<QnA />} />
//     <Route path="/contact" element={<Contact />} />
//   </Route>
// )
