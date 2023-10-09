import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Students from "./pages/Students";
import NoPageFound from "./pages/NoPageFound";
import AuthContext from "./AuthContext";
import ProtectedWrapper from "./ProtectedWrapper";
import { useEffect, useState } from "react";
import Settings from "./pages/Settings";
import Report from "./pages/Report";
import Attendance from "./pages/Attendance";
import Webdev1 from "./Sections/Webdev1";
import Webdev2 from "./Sections/Webdev2";
import Webdev3 from "./Sections/Webdev3";
import Contactus from "./buttons/Contactus";
import Contactadmin from "./buttons/Contactadmin";

const App = () => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  let myLoginUser = JSON.parse(localStorage.getItem("user"));
  

  useEffect(() => {
    if (myLoginUser) {
      setUser(myLoginUser._id);
      setLoader(false);
    } else {
      setUser("");
      setLoader(false);
    }
  }, [myLoginUser]);

  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  let value = { user, signin, signout };

  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedWrapper>
                <Layout />
              </ProtectedWrapper>
            }
          >
          
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminlayout" element={<AdminLayout />}/>
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/webdev1" element={<Webdev1 />} />
            <Route path="/webdev2" element={<Webdev2 />} />
            <Route path="/webdev3" element={<Webdev3 />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/contactadmin" element={<Contactadmin />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
