
import React from "react";
import NewspaperLayout from "@/components/NewspaperLayout";
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on natural language processing.",
      achievements: ["Graduated with Distinction", "Published research paper on deep learning applications"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2016-2020",
      description: "Core curriculum included data structures, algorithms, software architecture, and web development.",
      achievements: ["Dean's List all semesters", "Best Capstone Project Award"]
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      year: "2015",
      description: "Intensive 12-week program focused on full-stack web development technologies.",
      achievements: ["Built 5 full-stack applications", "Received Outstanding Student Award"]
    }
  ];

  return (
    <NewspaperLayout title="THE PORTFOLIO TIMES" date="May 22, 2025">
      <div className="space-y-6">
        <div className="newspaper-column">
          <p className="font-italic mb-4">
            Education forms the foundation of my professional journey. This page details my academic
            background, highlighting the degrees, certifications, and educational experiences
            that have shaped my skills and knowledge in the field.
          </p>
          
          <p>
            Through continuous learning and dedicated study, I've built a solid educational
            foundation that enables me to tackle complex challenges and contribute meaningfully
            to projects.
          </p>
        </div>

        <div className="newspaper-divider"></div>
        
        <h3 className="newspaper-subheadline">ACADEMIC CREDENTIALS</h3>
        
        <div className="space-y-6 mt-6">
          {educationData.map((item, index) => (
            <Card key={index} className="p-5 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <h4 className="font-bold text-newspaper-heading">{item.degree}</h4>
                <span className="text-newspaper-subheading font-medium">{item.year}</span>
              </div>
              <p className="text-sm mb-2 italic">{item.institution}</p>
              <p className="text-sm mb-4">{item.description}</p>
              <div>
                <p className="text-xs font-bold mb-1">Key Achievements:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="text-center">
          <p className="text-sm italic">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
          <p className="text-xs mt-1">- Albert Einstein</p>
        </div>
      </div>
    </NewspaperLayout>
  );
};

export default Education;
