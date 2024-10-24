import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

const HomePage = lazy(() => import("../pages/HomePage"));
const AddCVPage = lazy(() => import("../pages/AddCVPage"));
const AllCVsPage = lazy(() => import("../pages/AllCVsPage"));
const EditCVPage = lazy(() => import("../pages/EditCVPage"));
const ResumePreview = lazy(() => import("../components/ResumePreview"));

export default function AppRouter() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-cv" element={<AddCVPage />} />
            <Route path="/all-cvs" element={<AllCVsPage />} />
            <Route path="/edit-cv/:id" element={<EditCVPage />} />
            <Route path="/resume-preview" element={<ResumePreview />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
