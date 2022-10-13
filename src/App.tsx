import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import useAuth from "@store/useAuth";
import protectedRoutes from "@components/common/router/protectedRoutes";
import unprotectedRoutes from "@components/common/router/unprotectedRoutes";
import QUICK_PATH from "@utils/quick-path";

function App() {
  const { HOME, LOGIN } = QUICK_PATH;
  const auth = useAuth();

  const [routeComponents, setRouteComponents] = useState<React.ReactElement[]>(
    []
  );
  const [defaultRedirectionPath, setDefaultRedirectionPath] =
    useState<string>(HOME);

  useLayoutEffect(() => {
    setRouteComponents(
      auth.isAuthenticated ? protectedRoutes : unprotectedRoutes
    );
    setDefaultRedirectionPath(auth.isAuthenticated ? HOME : LOGIN);
  }, [auth.isAuthenticated]);

  return (
    <div className="App">
      <Routes>
        {routeComponents}
        <Route
          path="*"
          element={<Navigate replace to={defaultRedirectionPath} />}
        />
      </Routes>
    </div>
  );
}

export default App;
