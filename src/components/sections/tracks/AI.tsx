import TrackCard from "../../TrackCard";

interface AIProps {
  onSelectProject?: (projectId: string) => void;
}

export default function AI({ onSelectProject }: AIProps) {
  const description = "Rigorous exploration of machine learning algorithms, deep learning architectures, and generative AI systems, backed by strong foundations in continuous mathematics, data science methodologies, and data-driven problem solving.";  
  
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
    { name: "Computer Systems", grade: 95 },
    { name: "Machine Learning", grade: 100 },
    { name: "Algorithms", grade: 100 },
    { name: "Software Engineering", grade: 95 },
    { name: "Database Systems", grade: 95 },
    { name: "Data Science", grade: 94 },
    { name: "Deep Models for Generative AI" },
    { name: "Deep Learning for Computer Science" },
    { name: "LLM - Augmented Software Practice" },
    { name: "AI-Driven Cybersecurity" },
  ];

  return (
    <TrackCard 
      title="Machine Learning & AI"
      description={description}
      courses={courses}
      projects={projects}
      cvLink="/cv/AmitCohenCVML2086.pdf"
      onSelectProject={onSelectProject}
    />
  );
}