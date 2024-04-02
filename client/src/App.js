import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, useLocation , Navigate } from "react-router-dom";
>>>>>>> c95a935af76b754ad3ab39f468a98bbd1f2f4505
import Header from "./components/common/header/header.js";
import Footer from "./components/common/footer/Footer.jsx";
import ErrorPage from "./pages/error-page/errorPage.js";
import LandingPage from "./pages/landing-page/landingPage.js";
import Signup from "./components/common/auth/signup/signup.jsx";
import Login from "./components/common/auth/login/Login.jsx";
import UserProfile from "./pages/auth/user-profile/user-profile.js";

import Courses from "./pages/course-page/coursepage-landing/courseLandingPage.js";
import CourseEnquiry from "./pages/auth/enquiry/courseEnquiry.js";
import DemoEnquiry from "./components/common/auth/free-demo/DemoEnquiry.jsx";
import BlogLanding from "./pages/blog/blog-landing/blogLanding.js";
import BlogPage from "./pages/blog/blog-single/blogPage.js";
<<<<<<< HEAD
import DmCoursePage from "./pages/course-page/course-page-single/dmCoursePage.js";
import ForgotPassword from "./components/common/auth/forgot-password/forgot-password.jsx"; // Import the Forgot Password component
=======
import CourseSingle from "./pages/course-page/coursePage/coursePage.js";
>>>>>>> c95a935af76b754ad3ab39f468a98bbd1f2f4505

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route for Forgot Password */}
        <Route path="/user-dashboard" element={<UserProfile />} />
        <Route path="/courses" element={<Courses />} />
<<<<<<< HEAD
=======
        <Route path="/:courseId" element={<CourseSingle/>}/>
        
>>>>>>> c95a935af76b754ad3ab39f468a98bbd1f2f4505
        <Route path="/course-enquiry" element={<CourseEnquiry/> }/>
        <Route path="/demo-enquiry" element={<DemoEnquiry/> }/>
        
        <Route path="/resources" element={<BlogLanding />} />
        <Route path="/resources/:id" element={<BlogPage />} />
<<<<<<< HEAD
        <Route path="*" element={<ErrorPage />} />
=======
        
        <Route path="/user" element={<UserProfile />} />
        {/* Define the error page route without any path segment */}
        <Route path="/error" element={<ErrorPage />} />
        {/* Redirect all other unknown routes to the error page */}
        <Route path="*" element={<Navigate to="/error" />} />
>>>>>>> c95a935af76b754ad3ab39f468a98bbd1f2f4505
      </Routes>
      <Footer />
    </>
  );
}

export default App;
