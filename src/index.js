import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExampleUseCallbackMain from "./ExampleUseCallback/ExampleUseCallbackMain";
//import ExampleUseMemo from './ExampleUseMemo';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Directory from "./userDirectory/Directory";
import UseRefHomePage from "./ExampleUseRef/UseRefHomePage";
import PurposeMutantVariable from "./ExampleUseRef/PurposeMutantVariable";
import PurposeAccessDom from "./ExampleUseRef/PurposeAccessDom";
import ErrorBoundary from "./ErrorBoundary";
import ExampleUseEffectMain from "./ExampleUseEffect/ExampleUseEffectMain";
import { Auth0Provider } from "@auth0/auth0-react";
//import ParentA from "./LiftingStateUp/ParentA";
//import ExampleUseContextParent from './ExampleUseContext/ExampleUseContextParent';
const ExampleUseContext = lazy(() => {
  return import("./ExampleUseContext/ExampleUseContextParent");
});
const ExampleUseMemo = lazy(() => {
  return import("./ExampleUseMemo");
});

const ParentA = lazy(() => {
  return import("./LiftingStateUp/ParentA");
});

const UseCallBackExample2 = lazy(() => {
  return import("./ExampleUseCallback2/Parent");
});
const HigherOrderComponent = lazy(() => {
  return import("./HigherOrderExample/App");
});


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ExampleUseContext",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <ExampleUseContext />
      </Suspense>
    ),
  },
  /* {
    path: "ExampleUseCallback",
    element: <ExampleUseCallbackMain />,
  }, */
  {
    path: "ExampleUseMemo",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <ExampleUseMemo />
      </Suspense>
    ),
  },
  {
    path: "userDirectory",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <Directory />
      </Suspense>
    ),
  },
  {
    path: "/ExampleUseRef",
    element: (
      <ErrorBoundary fallback="Error">
        <Suspense fallback={<h2>...Loading</h2>}>
          <UseRefHomePage />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        path: "PurposeMutantVariable",
        element: <PurposeMutantVariable />,
      },
      {
        path: "PurposeAccessDom",
        element: (
          <ErrorBoundary fallback="Error">
            <Suspense fallback={<h2>...Loading</h2>}>
              <PurposeAccessDom />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "ExampleUseEffect",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <ExampleUseEffectMain />
      </Suspense>
    ),
  },
  {
    path: "LiftingStateUp",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <ParentA />
      </Suspense>
    ),
  },
  {
    path: "ExampleUseCallback2",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <UseCallBackExample2 />
      </Suspense>
    ),
  },
  {
    path: "HigherOrderComponent",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <HigherOrderComponent />
      </Suspense>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-bneylzxsxy0iq0mw.us.auth0.com"
    clientId="YPaDAj63ijYybFUzPekAIPgVQwK6MsA6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
