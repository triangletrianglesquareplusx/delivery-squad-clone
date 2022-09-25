import React from "react";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import RestaurantsFullPage from "./pages/RestaurantsFullPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shopping from "./components/shopping/Shopping";
import FAQ from "./pages/FAQ";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminPage from "./pages/AdminPage";
import PrivateRoutes from "./utilities/PrivateRoutes";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/*<Route path="/" element={<Hackathon />}/>*/}
        <Route element={<PrivateRoutes />}>
          <Route path="/admin" />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<SingleArticle />} />
        <Route path="/restaurants" element={<RestaurantsFullPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
