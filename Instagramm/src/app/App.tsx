import { Route, Routes } from "react-router-dom";
import { Navbar } from "../widgets";
import HomePage from "@/pages/HomePage/ui/HomePage";
import { LoginLazyPage } from "@/pages/LoginPage/ui/LoginLazyPage";
import { RegisterLazyPage } from "@/pages/RegisterPage/ui/RegisterLazyPage";
import { Suspense } from "react";
import { Button, HStack, Spinner } from "@/shared/ui";

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="container">

      <Suspense fallback={<Spinner className="spinner"/>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginLazyPage />} />
              <Route path="/register" element={<RegisterLazyPage />} />
            </Routes>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};
