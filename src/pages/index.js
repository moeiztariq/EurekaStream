// Third party imports
import React from "react";
import Layout from "@theme/Layout";

// local imports
import Hero from "..//components/hero/index";
import Services from "../components/services";
import ProjectOverview from "../components/projects-overview";
import OurMission from "../components/mission";
import ContactUs from "../components/contanceUs/ContactUs";
import Technologies from "../components/technologies";

export default function Home() {
  return (
    <Layout
      title={"EureksStream: Pioneering Innovation in Digital Excellence"}
      description="A Software Engineering Company"
    >
      {/* <HomepageHeader /> */}
      <Hero />
      <OurMission />
      <Services />
      <ProjectOverview />
      <Technologies />
      <ContactUs />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
