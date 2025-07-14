import React from "react";
import { useDashboard } from "./Dashboard.logic";
import { Layout } from "../../components/organisms";
import Hero from "../../components/layout/Hero";
import CardSection from "../../components/cards/card-section/CardSection";
import {
  TwoColumnLayout,
  ResponsiveContainer,
} from "../../styles/exportDesign";

const Dashboard: React.FC = () => {
  const { sections } = useDashboard();

  return (
    <Layout>
      <Hero />

      <ResponsiveContainer $maxWidth="content" $padding="lg">
        {sections.map((section) => {
          if (section.id === "events") {
            const otherSection = sections.find((s) => s.id === "other");
            if (otherSection) {
              return (
                <TwoColumnLayout key="events-other-row">
                  <CardSection section={section} />
                  <CardSection section={otherSection} />
                </TwoColumnLayout>
              );
            }
          }

          if (section.id === "other") {
            return null;
          }

          return <CardSection key={section.id} section={section} />;
        })}
      </ResponsiveContainer>
    </Layout>
  );
};

export default Dashboard;
