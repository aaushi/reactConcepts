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
//import ExampleUseContextParent from './ExampleUseContext/ExampleUseContextParent';
const ExampleUseContext = lazy(() => {
  import("./ExampleUseContext/ExampleUseContextParent");
});
const ExampleUseMemo = lazy(() => {
  import("./ExampleUseMemo");
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
  {
    path: "ExampleUseCallback",
    element: <ExampleUseCallbackMain />,
  },
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
    path: "ExampleUseRef",
    element: (
      <Suspense fallback={<h2>...Loading</h2>}>
        <UseRefHomePage />
      </Suspense>
    ),
    children: [
      {
        path: "PurposeMutantVariable",
        element: <PurposeMutantVariable />,
      },
      {
        path: "PurposeAccessDom",
        element: <PurposeAccessDom />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
