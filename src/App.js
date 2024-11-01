import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import ForgotPass from './ForgetPass';
import Register from './Register';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import Home from './Home';
import Profile from './Profile';
import GroupPage from './groups';
import Members from "./members";
import Image from "./images";
import Videos from './Videos';
import Forms from './forms';
import Submitarticle from "./submitarticle";
import AllJobes from './allJobes';
import Alladverts from './alladverts';
import FAQ from "./FAQ";
import Shop from "./shops";
import PrivateRoute from './PrivateRoute';
import Questions from "./Questions";
import GetProfile from "./getProfile";
import GroupProfile from "./groupProfile";
import Articale1 from "./articale1";
import Articale2 from "./articale2";
import Articale3 from "./articale3";
import Articale4 from "./articale4";
import './App.css';

function App() {
  const navigate = useNavigate();

  // // Redirect to activity if user has login persisted
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('login') === 'true';
  //   if (isLoggedIn) {
  //     navigate('/activity');
  //   }
  // }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/articale1" element={<Articale1 />} />
        <Route path="/articale2" element={<Articale2 />} />
        <Route path="/articale3" element={<Articale3 />} />
        <Route path="/articale4" element={<Articale4 />} />
        <Route path="/groups" element={<GroupPage />} />
        {/* Protected Routes */}
        {/* <Route path="/activity" element={<PrivateRoute><Home /></PrivateRoute>} /> */}

        <Route path="/activity" element={<Home />} />
        <Route path="/getProfile/:id" element={<GetProfile />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/members" element={<Members />} />
        <Route path="/images" element={<Image />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/submitarticle" element={<Submitarticle />} />
        <Route path="/jobes" element={<AllJobes />} />
        <Route path="/adverts" element={<Alladverts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/groupProfile" element={<GroupProfile />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
