
import React from "react";
import NewspaperLayout from "@/components/NewspaperLayout";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Node.js", proficiency: 75 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Python", proficiency: 70 },
    { name: "SQL", proficiency: 65 },
  ];

  const softSkills = [
    { name: "Communication", description: "Clear and effective written and verbal communication" },
    { name: "Problem Solving", description: "Analytical approach to identifying and resolving issues" },
    { name: "Team Collaboration", description: "Working effectively in cross-functional teams" },
    { name: "Time Management", description: "Prioritizing tasks and meeting deadlines consistently" },
  ];

  const tools = [
    { name: "Git & GitHub", description: "Version control and collaborative development" },
    { name: "VS Code", description: "Primary code editor with extensive plugin knowledge" },
    { name: "Docker", description: "Containerization for consistent development environments" },
    { name: "Figma", description: "UI/UX design and collaborative prototyping" },
  ];

  return (
    <NewspaperLayout title="THE PORTFOLIO TIMES" date="May 22, 2025">
      <div className="space-y-6">
        <div className="newspaper-column">
          <p className="font-italic mb-4">
            In today's rapidly evolving tech landscape, having a diverse skill set is essential.
            This page outlines my technical abilities, soft skills, and familiarity with
            industry tools that enable me to deliver high-quality results.
          </p>
          
          <p>
            I continuously expand my skills through practice, projects, and staying updated
            with the latest industry trends and technologies.
          </p>
        </div>

        <div className="newspaper-divider"></div>
        
        <h3 className="newspaper-subheadline">TECHNICAL PROFICIENCIES</h3>
        
        <div className="space-y-4 mt-4">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} className="h-2 bg-paper-aged" />
            </div>
          ))}
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="newspaper-subheadline mb-4">SOFT SKILLS</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-3 bg-paper border border-paper-fold">
                  <h4 className="font-bold text-sm">{skill.name}</h4>
                  <p className="text-xs mt-1">{skill.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="newspaper-subheadline mb-4">TOOLS & ENVIRONMENTS</h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <Card key={index} className="p-3 bg-paper border border-paper-fold">
                  <h4 className="font-bold text-sm">{tool.name}</h4>
                  <p className="text-xs mt-1">{tool.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="text-center">
          <p className="text-sm italic">
            "Skills are the currency of the modern workplace."
          </p>
        </div>
      </div>
    </NewspaperLayout>
  );
};

export default Skills;
