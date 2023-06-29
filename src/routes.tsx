import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import IframeTestPage from "./pages/IframePage";
import ContactsGHLPage from "./pages/ContactsGHLPage";
import Demo from "./pages/Demo";
import ContactDetails from "./components/ContactDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "iframe", element: <IframeTestPage /> },
      { path: "contacts", element: <ContactsGHLPage /> },

      {
        path: "contacts",
        element: <ContactsGHLPage />,
        children: [{ path: ":id", element: <ContactDetails /> }],
      },
      { path: "demo", element: <Demo /> },
    ],
  },
]);

export default router;
