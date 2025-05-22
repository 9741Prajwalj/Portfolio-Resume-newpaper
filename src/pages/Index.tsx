
import React from "react";
import NewspaperLayout from "@/components/NewspaperLayout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <NewspaperLayout title="THE PORTFOLIO TIMES" date="May 22, 2025">
      <div className="space-y-6">
        <div className="newspaper-column">
          <p className="font-italic mb-4">
            Welcome to my portfolio presented as a newspaper! This unique format showcases
            my work, skills, and experience in a classic newspaper style. Navigate through
            the different sections using the page turn buttons in the corners.
          </p>
          
          <p>
            This front page serves as an introduction and summary of what you'll find in the
            subsequent pages. Explore the various sections to learn more about my education,
            skills, projects, and how to contact me.
          </p>
        </div>

        <div className="newspaper-divider"></div>
        
        <h3 className="newspaper-subheadline">FEATURED THIS EDITION</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="p-4 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Educational Background</h4>
            <p className="text-sm mb-3">
              Discover my academic journey and the qualifications I've earned throughout my career.
            </p>
            <Link 
              to="/education" 
              className="text-sm font-bold hover:underline"
            >
              Continue reading →
            </Link>
          </Card>
          
          <Card className="p-4 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Professional Skills</h4>
            <p className="text-sm mb-3">
              An in-depth look at my technical abilities, soft skills, and areas of expertise.
            </p>
            <Link 
              to="/skills" 
              className="text-sm font-bold hover:underline"
            >
              Continue reading →
            </Link>
          </Card>
          
          <Card className="p-4 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Notable Projects</h4>
            <p className="text-sm mb-3">
              Explore the noteworthy projects I've completed and the impact they've made.
            </p>
            <Link 
              to="/projects" 
              className="text-sm font-bold hover:underline"
            >
              Continue reading →
            </Link>
          </Card>
          
          <Card className="p-4 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
            <h4 className="font-bold mb-2">Get in Touch</h4>
            <p className="text-sm mb-3">
              Find out how to contact me for opportunities, collaborations, or inquiries.
            </p>
            <Link 
              to="/contact" 
              className="text-sm font-bold hover:underline"
            >
              Continue reading →
            </Link>
          </Card>
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="text-center">
          <p className="text-sm italic">
            "Turn the page to begin exploring my portfolio newspaper."
          </p>
        </div>
      </div>
    </NewspaperLayout>
  );
};

export default Dashboard;
