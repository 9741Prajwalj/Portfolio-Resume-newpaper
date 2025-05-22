
import React from "react";
import NewspaperLayout from "@/components/NewspaperLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, cart functionality, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      highlights: [
        "Implemented responsive design for all device sizes",
        "Integrated secure payment processing",
        "Developed admin dashboard for inventory management"
      ],
      date: "January 2023"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts and historical weather data for locations worldwide.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      highlights: [
        "Created interactive weather maps",
        "Built responsive UI with dark/light mode",
        "Implemented geolocation for automatic local weather"
      ],
      date: "July 2022"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with features for organizing tasks, setting deadlines, and team collaboration.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      highlights: [
        "Implemented drag-and-drop functionality",
        "Built real-time updates using Firebase",
        "Created notification system for task deadlines"
      ],
      date: "November 2021"
    },
    {
      title: "Portfolio Newspaper",
      description: "A unique portfolio website designed like a newspaper with page-turning animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "CSS Animations"],
      highlights: [
        "Designed custom page-turning animations",
        "Created newspaper-inspired layout and typography",
        "Implemented responsive design for all devices"
      ],
      date: "May 2025"
    }
  ];

  return (
    <NewspaperLayout title="THE PORTFOLIO TIMES" date="May 22, 2025">
      <div className="space-y-6">
        <div className="newspaper-column">
          <p className="font-italic mb-4">
            This section showcases selected projects that demonstrate my skills,
            problem-solving approach, and ability to deliver polished end products.
            Each project represents different aspects of my technical abilities and
            design sensibilities.
          </p>
          
          <p>
            These projects reflect my passion for creating intuitive, functional, and
            visually appealing applications that solve real problems and provide exceptional
            user experiences.
          </p>
        </div>

        <div className="newspaper-divider"></div>
        
        <h3 className="newspaper-subheadline">FEATURED PROJECTS</h3>
        
        <div className="space-y-6 mt-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-5 bg-paper border border-paper-fold hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="font-bold text-newspaper-heading">{project.title}</h4>
                <span className="text-xs italic">{project.date}</span>
              </div>
              <p className="text-sm mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-paper-aged text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div>
                <p className="text-xs font-bold mb-1">Key Features:</p>
                <ul className="list-disc list-inside text-xs space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="newspaper-divider"></div>
        
        <div className="text-center">
          <p className="text-sm italic">
            "Projects are the practical expression of ideas and skills."
          </p>
        </div>
      </div>
    </NewspaperLayout>
  );
};

export default Projects;
