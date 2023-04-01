import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Members from "./Pages/Members";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/members" element={<Members />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
