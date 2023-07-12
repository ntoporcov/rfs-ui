import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createRoot } from "react-dom/client";
import RfsThemeProvider from "./src/lib/Providers/RfsThemeProvider";
import ExampleApp from "./playground/example/App";

const path = window.location.pathname;
const importPath = `/playground${path === "/" ? "/example" : path}/App.tsx`;

const App = lazy(() => import(importPath));

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <RfsThemeProvider>
    <ErrorBoundary fallbackRender={ExampleApp}>
      <App />
    </ErrorBoundary>
  </RfsThemeProvider>,
);
