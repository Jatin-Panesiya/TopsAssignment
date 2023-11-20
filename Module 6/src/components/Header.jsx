import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import AdminLogin from "./AdminLogin";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Admin = lazy(() => import("./Admin"));

const Header = () => {
  return (
    <div>
      <Router>
        <div className="flex items-center justify-end gap-5 py-3  w-full bg-slate-200 text-xl px-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
        </div>
        <Suspense fallback={<p>Loading....</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default Header;
