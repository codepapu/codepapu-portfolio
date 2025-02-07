import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';

import { Ap } from "../pages/ap";
import { PageNotFound } from "../pages/404";
import { Home } from "../pages/home";
import { Resume } from "../pages/resume";
import { Skills } from "../pages/skills";
import { Project } from "../pages/project";
import { Resources } from "../pages/resources";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";
import { Socialicons } from "../components/socialicons";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page fade"
        unmountOnExit
      >
        <Routes location={location} basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/ap" element={<Ap />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/404" element={<PageNotFound />} />
          {/* Fallback route for unmatched URLs */}
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
