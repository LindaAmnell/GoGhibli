import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";

import FavoriteMovies from "../components/FavoriteMovies.js";
import App from "../App.js";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/Favorite",
        element: <FavoriteMovies />,
      },
     
    ],
  },
]);

export { router };
