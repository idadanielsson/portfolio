import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Contact from "./components/main/contact/Contact";
import { Home } from "./components/main/home/Home";

import { Resume } from "./components/main/resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },

      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
