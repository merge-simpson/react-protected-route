import TopBar from "@components/common/topbar/TopBar";
import ProtectedRoutes from "@components/routes/protectedRoutes";
import UnprotectedRoutes from "@components/routes/unprotectedRoutes";
import useAuth from "@store/useAuth";
import PATH from "@utils/path";
import STORAGE_KEY from "@utils/storage-key";
import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const { HOME, LOGIN } = PATH;
  const pathsIncludingNavigate: string[] = [HOME, LOGIN];
  const location = useLocation();
  // 1. 공통된 라우트 영역을 <Routes></Routes> 바깥으로 뺄 수가 없는 현상.
  //    -> Routes 단위로 일반화하여야 원활하게 작동함(Routes 바깥에 둘 경우 렌더링 시점 차이로 공통영역 Redirection이 먼저 작동하기 때문).
  // 2. useLocation to listen the change of location or path - nav를 가지는 페이지와 아닌 페이지 구분하기
  const auth = useAuth();

  const [routeComponents, setRouteComponents] = useState<React.ReactElement>(
    localStorage.getItem(STORAGE_KEY.AUTHUSER) != null ? (
      <ProtectedRoutes />
    ) : (
      <UnprotectedRoutes />
    )
  );
  const [hasNav, setHasNave] = useState<boolean>(false);

  useLayoutEffect(() => {
    setRouteComponents(
      auth.isAuthenticated ? <ProtectedRoutes /> : <UnprotectedRoutes />
    );
  }, [auth.isAuthenticated]);

  useLayoutEffect(() => {
    const pathname =
      location.pathname.length > 1 && location.pathname.at(-1) === "/"
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const hasNav = pathsIncludingNavigate.includes(pathname);
    setHasNave(hasNav);
  }, [location.pathname]);

  return (
    <div className="App">
      {hasNav && <TopBar />}
      <div>{routeComponents}</div>
    </div>
  );
}

export default App;
