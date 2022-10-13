import Home from "@components/home/Home";
import { Navigate, Route } from "react-router-dom";
import QUICK_PATH from "@utils/quick-path";

const { HOME } = QUICK_PATH;

const protectedRoutes = [
  // use array to prevent error: [...] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
  <Route key={HOME} path={HOME} element={<Home />} />,
  <Route path="*" element={<Navigate replace to={HOME} />} />,
];

export default protectedRoutes;
