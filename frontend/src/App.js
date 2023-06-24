import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import DashboardLogin from "./pages/DashboardLogin";
import AddForm from "./components/Party/AddForm";
import DashboardRegistration from "./pages/DashboardRegistration";
import Reset from "./pages/ResetPassword";
import SendLink from "./pages/SendLink";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const checkAuth = () => {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/reset/:token" element={<Reset />} />
          <Route
            path="/registration"
            element={<DashboardRegistration />}
          ></Route>
          <Route path="/login" element={<DashboardLogin />}></Route>
          <Route path="/forgot-password" element={<SendLink />}></Route>
          <Route
            path="/"
            element={
              <Protected isLoggedIn={checkAuth()}>
                <Dashboard />
              </Protected>
            }
          >
            <Route
              index
              element={
                <Protected isLoggedIn={checkAuth()}>
                  <Admin />
                </Protected>
              }
            ></Route>

            <Route
              path="dashboard/booking"
              element={
                <Protected isLoggedIn={checkAuth()}>
                  <Booking />
                </Protected>
              }
            ></Route>
            <Route
              path="dashboard/form"
              element={
                <Protected isLoggedIn={checkAuth()}>
                  <AddForm />
                </Protected>
              }
            ></Route>
            <Route
              path="dashboard/menu"
              element={
                <Protected isLoggedIn={checkAuth()}>
                  <Menu />
                </Protected>
              }
            ></Route>
            <Route
              path="dashboard/profile"
              element={
                <Protected isLoggedIn={checkAuth()}>
                  <Profile />
                </Protected>
              }
            ></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
