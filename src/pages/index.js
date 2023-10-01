// Third party imports
import React from "react";
import Layout from "@theme/Layout";

// local imports
import Hero from "..//components/hero/index";
import Services from "../components/services";
import ProjectOverview from "../components/projects-overview";
import OurMission from "../components/philosophy";
import ContactUs from "../components/contanceUs/ContactUs";

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
      <ContactUs />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
