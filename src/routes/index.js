import config from "../config";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
  { path: config.routes.root, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.Profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: null },
  { path: config.routes.search, component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
