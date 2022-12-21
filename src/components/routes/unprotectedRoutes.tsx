import LoginProgress from "@components/login/LoginProgress";
import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/path";

const { LOGIN } = PATH;

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginProgress />} />
      <Route path="*" element={<Navigate replace to={LOGIN} />} />
    </Routes>
  );
};

export default UnprotectedRoutes;
