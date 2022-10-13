import LoginProgress from "@components/login/LoginProgress";
import { Navigate, Route } from "react-router-dom";
import QUICK_PATH from "@utils/quick-path";

const { LOGIN } = QUICK_PATH;

const unprotectedRoutes = [
  // array required
  <Route key={LOGIN} path={LOGIN} element={<LoginProgress />} />,
  <Route
    key="redirection"
    path="*"
    element={<Navigate replace to={LOGIN} />}
  />,
];

export default unprotectedRoutes;
