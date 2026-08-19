import TrackCard from "../../TrackCard";

interface NetworksProps {
  onSelectProject?: (projectId: string) => void;
}

export default function Networks({ onSelectProject }: NetworksProps) {
  const description = "Comprehensive study of network protocols, low-level operating system architecture, cybersecurity defenses, and malware analysis techniques designed to secure complex distributed environments.";  
  
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
    { name: "Computer Communication Networks", grade: 100 },
    { name: "Operating Systems", grade: 100 },
    { name: "Computer Systems", grade: 95 },
    { name: "Algorithms", grade: 100 },
    { name: "Software Engineering", grade: 95 },
    { name: "Database Systems", grade: 95 },
    { name: "Reverse Engineering & Malware Analysis" },
    { name: "AI-Oriented Cyber Security" },
    { name: "Cyber - The Dark Side of Technology" }
  ];

  return (
    <TrackCard 
      title="Cyber & Networks"
      description={description}
      courses={courses}
      projects={projects}
      cvLink="/cv/AmitCohenCVNS2086.pdf"
      onSelectProject={onSelectProject}
    />
  );
}