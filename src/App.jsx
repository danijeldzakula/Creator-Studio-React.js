import React from "react";
import Router from "./router/Router";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  return <Router pathname={pathname} />;
}
