import LoginProgress from "@components/login/LoginProgress";
import { Navigate, Route, Routes } from "react-router-dom";
import QUICK_PATH from "@utils/quick-path";

const { LOGIN } = QUICK_PATH;

const UnprotectedRoutes = () => {
  return (
    <Routes>
      {" "}
      <Route key={LOGIN} path={LOGIN} element={<LoginProgress />} />
      <Route
        key="redirection"
        path="*"
        element={<Navigate replace to={LOGIN} />}
      />
    </Routes>
  );
};

export default UnprotectedRoutes;
