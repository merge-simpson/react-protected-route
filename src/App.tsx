import protectedRoutes from "@components/common/router/protectedRoutes";
import unprotectedRoutes from "@components/common/router/unprotectedRoutes";
import useAuth from "@store/useAuth";
import QUICK_PATH from "@utils/quick-path";
import React, { useLayoutEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const { HOME, LOGIN } = QUICK_PATH;
  const location = useLocation();
  // 1. 리디렉션용 라우트는 각 배열에 옮김(because rerendering 순서가 더 늦기 때문에 무조건 리디렉션이 작동해 버리는 현상)
  //    - 그래서 그거 default 머시기를 안 쓰게 되니까 지움.
  // 2. useLocation to listen the change of location or path - nav를 가지는 페이지와 아닌 페이지 구분하기
  const auth = useAuth();

  const [routeComponents, setRouteComponents] = useState<React.ReactElement[]>(
    []
  );

  useLayoutEffect(() => {
    setRouteComponents(
      auth.isAuthenticated ? protectedRoutes : unprotectedRoutes
    );
  }, [auth.isAuthenticated]);

  return (
    <div className="App">
      <Routes>{routeComponents}</Routes>
    </div>
  );
}

export default App;
