import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import BlogContextProvider from "./context/BlogContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/blog/*" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
  );
}

export default App;
