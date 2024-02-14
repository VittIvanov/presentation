// import logo from './logo.svg';
// import styles from './App.module.css'
import React from "react";
import Header from "./layout/Header";
import MainPage from "./mainPage/MainPage";
import NotFound from "./notFound/NotFound";
import NiceGallery from "./niceGallery/NiceGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoute from "./const/AppRoute";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={AppRoute.MainPage} element={<MainPage />} />
        <Route path={AppRoute.NiceGallery} element={<NiceGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
