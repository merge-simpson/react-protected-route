import Home from "@components/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/path";

const { HOME } = PATH;

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
