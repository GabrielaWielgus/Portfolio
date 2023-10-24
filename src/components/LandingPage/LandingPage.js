import React from "react";
import NavBar from "../NavBar/NavBar";
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import WorkSection from '../WorkSection/WorkSection';
import TechnologySection from '../TechnologySection/TechnologySection';
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const LandingPage = () => {
  return (
    <div className="landing-page">
        <Header />
        <NavBar/>
        <WelcomeSection />
        <WorkSection/>
        <TechnologySection />
        <Projects />
    </div>
  );
};

export default LandingPage;