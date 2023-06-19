import React from "react";
import NavBar from "../NavBar/NavBar";
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import WorkSection from '../WorkSection/WorkSection';
import TechnologySection from '../TechnologySection/TechnologySection';
import ContactSection from '../ContactSection/ContactSection';



const LandingPage = () => {
  return (
    <div className="landing-page">
        <NavBar/>
        <WelcomeSection />
        <WorkSection />
        <TechnologySection />
        <ContactSection />
    </div>
  );
};

export default LandingPage;