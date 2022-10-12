import LoginProgress from "@components/login/LoginProgress";
import { Route } from "react-router-dom";
import QUICK_PATH from "@utils/quick-path";

const { LOGIN } = QUICK_PATH;

const unprotectedRoutes = [
  //
  <Route key={LOGIN} path={LOGIN} element={<LoginProgress />} />,
];

export default unprotectedRoutes;
