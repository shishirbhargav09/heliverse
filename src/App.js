import React, { useEffect } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import data from "./heliverse_mock_data.json";
import { useDispatch } from "react-redux";
import { addDomain, addGenders, all_users } from "./Store/userSlice";
import Team from "./Pages/Team";
import Navbar from "./Components/Navbar";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const genders = [];
    const domains = [];
    for (let i = 0; i < data.length; i++) {
      if (!genders.includes(data[i].gender)) {
        genders.push(data[i].gender);
      }
      if (!domains.includes(data[i].domain)) {
        domains.push(data[i].domain);
      }
    }
    // console.log(domains);
    dispatch(addDomain(domains));
    dispatch(addGenders(genders));
    dispatch(all_users(data));
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Toaster
          containerStyle={{ top: 100 }} 
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
