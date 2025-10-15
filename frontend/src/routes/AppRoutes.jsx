import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PostJob from "../pages/PostJob";
import ApplyJob from "../pages/ApplyJob";
import Applications from "../pages/Applications";
import Payments from "../pages/Payments";
import Reviews from "../pages/Reviews";
import JobDetails from "../pages/JobDetails";
import FindTalent, { freelancerLoader } from "../pages/Findtalent.jsx";
import FindWork, { jobLoader } from "../pages/FindWork";
import WhySkillhub from "../pages/WhySkillHub";
import Enterprise from "../pages/Enterprise";
import FreelancerProfile from "../pages/FreelancerProfile.jsx";
import WorkDetails from "../pages/WorkDetails.jsx";
import App from "../App.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/post-job/:freelancerId" element={<PostJob />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="/apply/:jobId" element={<ApplyJob />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/apply/:id" element={<ApplyJob />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route
        path="/find-talent"
        element={<FindTalent />}
        loader={freelancerLoader}
      />
      <Route path="/find-work" element={<FindWork />} loader={jobLoader} />
      <Route path="/why-skillhub" element={<WhySkillhub />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/workdetails/:id" element={<WorkDetails />}></Route>
      <Route path="/freelancer/:freelancerId" element={<FreelancerProfile />} />
    </Route>
  )
);

export default appRouter;
