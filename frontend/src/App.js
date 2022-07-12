
import { Fragment, useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchJob from "./components/SearchJob";
import ResumeBuilder from "./components/ResumeBuilder";
import SalarySearchBar from "./components/SalarySearchBar";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import { getUser } from "./api";
import { useAppContext } from "./hooks";


function App() {
  const { setUser } = useAppContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getUser()
      .then(res => setUser(res.data))
      .catch(err => { console.log(err.response.data); })
      .finally(() => setChecked(true))
  }, []);


  return (
    <Fragment>
      {checked && (
        <main>
          <Header />

          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <SearchJob />
                </RequireAuth>
              } />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route
              path="*"
              element={
                <RequireAuth>
                  <SearchJob />
                </RequireAuth>
              } />
          </Routes>
          <Footer />
        </main>
      )}
    </Fragment>
  );
}

export default App;
