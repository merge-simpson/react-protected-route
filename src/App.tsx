import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import React, { useLayoutEffect, useState } from "react";
import useAuth from "@store/useAuth";
import protectedRoutes from "@components/common/router/protectedRoutes";
import unprotectedRoutes from "@components/common/router/unprotectedRoutes";
import QUICK_PATH from "@utils/quick-path";

function App() {
  const auth = useAuth();

  const [RouteComponentSet, setRouteComponentSet] = useState<
    React.ReactElement[]
  >([]);
  const [defaultRedirectionPath, setDefaultRedirectionPath] =
    useState<string>("/");

  useLayoutEffect(() => {
    const { HOME, LOGIN } = QUICK_PATH;

    setRouteComponentSet(
      auth.isAuthenticated ? protectedRoutes : unprotectedRoutes
    );
    setDefaultRedirectionPath(auth.isAuthenticated ? HOME : LOGIN);
  }, [auth.isAuthenticated]);

  return (
    <div className="App">
      <Routes>
        {RouteComponentSet}
        <Route
          path="*"
          element={<Navigate replace to={defaultRedirectionPath} />}
        />
      </Routes>
    </div>
  );
}

export default App;
