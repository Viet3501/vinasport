import { AddSidebar } from "~/Components/Layout";
import Home from "~/Pages/Home";
import Livescore from "~/Pages/Livescore";
import News from "~/Pages/News";
import Rank from "~/Pages/Rank";
const publicRoutes = [
  {
    path: "/",
    element: Home
  },
  {
    path: "/livescore",
    element: Livescore
  },
  {
    path: "/news",
    element: News
  },
  {
    path: "/rank",
    element: Rank,
    layout: AddSidebar
  },
];

export {publicRoutes}
