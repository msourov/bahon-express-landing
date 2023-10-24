import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import Pricing from "./pages/Pricing";
import QnA from "./pages/QnA";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="tracking" element={<Tracking />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="qna" element={<QnA />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
export default router;
