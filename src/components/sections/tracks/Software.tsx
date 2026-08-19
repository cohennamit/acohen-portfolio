import TrackCard from "../../TrackCard";

interface SoftwareProps {
  onSelectProject?: (projectId: string) => void;
}

export default function Software({ onSelectProject }: SoftwareProps) {
  const description = "Advanced proficiency in core programming principles, full-stack application engineering, complex algorithmic logic, and modern object-oriented software architecture for scalable systems.";  
  
  const projects = [
    // Added 'id' matching the config.json projects array
    { id: "personal-portfolio", name: "This Portfolio", link: "https://github.com/cohennamit", linkName: "This Portfolio" },
    { id: "satisfy", name: "Satisfy", link: "https://github.com/cohennamit", linkName: "Satisfy (Spotify Clone)" },
    { id: "investing-helper", name: "InvestingHelper", link: "https://github.com/cohennamit", linkName: "InvestingHelper Platform" },
    { id: "pysocket-chat", name: "PySocket Chat System", link: "https://github.com/cohennamit", linkName: "PySocket Chat System" },
    { id: "spam-detection", name: "Spam Detection", link: "https://github.com/cohennamit", linkName: "Spam Detection (NLP)" },
    { id: "restaurant-management", name: "Restaurant Management System", link: "https://github.com/cohennamit", linkName: "Restaurant Manager" }
  ];

  const courses = [
    { name: "Introduction to Computer Science", grade: 100 },
    { name: "Computer Systems", grade: 95 },
    { name: "Algorithms", grade: 100 },
    { name: "Software Engineering", grade: 95 },
    { name: "Database Systems", grade: 95 },
    { name: "Advanced Programming Workshop", grade: 91 },
    { name: "Data Structures", grade: 90 },
    { name: "Object-Oriented Programming", grade: 90 },
    { name: "Advanced Software Solutions Engineering 1" },
    { name: "Advanced Software Solutions Engineering 2" },
    { name: "LLM - Augmented Software Practice" },
    { name: "Automata & Formal Languages" },
    { name: "Computability & Algorithmic Complexity" }
  ];

  return (
    <TrackCard 
      title="Software Development"
      description={description}
      courses={courses}
      projects={projects}
      cvLink="/cv/AmitCohenCVSD2086.pdf"
      onSelectProject={onSelectProject}
    />
  );
}