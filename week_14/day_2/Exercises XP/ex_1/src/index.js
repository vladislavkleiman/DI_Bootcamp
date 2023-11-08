import React from "react";
import ReactDOM from "react-dom/client";
import BuggyCounter from "./App";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <ErrorBoundary />
      <BuggyCounter />
    </div>
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
    <div>
      <BuggyCounter />
    </div>
  </React.StrictMode>
);
