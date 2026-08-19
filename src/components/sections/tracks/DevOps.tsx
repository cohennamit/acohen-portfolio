import TrackCard from "../../TrackCard";

interface DevOpsProps {
  onSelectProject?: (projectId: string) => void;
}

export default function DevOps({ onSelectProject }: DevOpsProps) {
  const description = "Mastery of system deployments, continuous integration pipelines, robust database management, and advanced systems infrastructure engineering to ensure high performance, scalability, and operational reliability.";  
  
  const projects = [
    // Added 'id' matching the config.json projects array
    { id: "spam-detection", name: "Spam Detection", link: "https://github.com/cohennamit", linkName: "Spam Detection (NLP)" },
    { id: "pysocket-chat", name: "PySocket Chat System", link: "https://github.com/cohennamit", linkName: "PySocket Chat System" },
    { id: "satisfy", name: "Satisfy", link: "https://github.com/cohennamit", linkName: "Satisfy (Spotify Clone)" },
    { id: "investing-helper", name: "InvestingHelper", link: "https://github.com/cohennamit", linkName: "InvestingHelper Platform" },
    { id: "restaurant-management", name: "Restaurant Management System", link: "https://github.com/cohennamit", linkName: "Restaurant Manager" }
  ];

  const courses = [
    { name: "Introduction to Computer Science", grade: 100 },
    { name: "Operating Systems", grade: 100 },    
    { name: "Computer Systems", grade: 95 },
    { name: "Algorithms", grade: 100 },
    { name: "Software Engineering", grade: 95 },
    { name: "Database Systems", grade: 95 },
    { name: "Introduction to DevOps" },
    { name: "Advanced Software Solutions 1" },
    { name: "Advanced Software Solutions 2" }
  ];

  return (
    <TrackCard 
      title="DevOps & Systems"
      description={description}
      courses={courses}
      projects={projects}
      cvLink="/cv/AmitCohenCVNS2086.pdf"
      onSelectProject={onSelectProject}
    />
  );
}