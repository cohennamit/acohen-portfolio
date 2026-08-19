export type CareerTrackId =
  | "software-development"
  | "ml-ai"
  | "devops"
  | "networks";

export interface Course {
  id: string;
  name: string;
  grade?: number;
  status: "completed" | "upcoming";
  semester: string; // "Year 1" | "Year 2" | "Year 3"
  trackIds: CareerTrackId[];
  isFoundation?: boolean; // true for math courses shown without grades
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  trackIds: CareerTrackId[];
  metrics?: string;
  link?: string;
}

export interface CareerTrack {
  id: CareerTrackId;
  title: string;
  shortDescription: string;
  cvFilePath: string;
  backgroundSceneId: string;
}

export interface ProfileInfo {
  fullName: string;
  degree: string;
  gpa: number;
  photoPath: string;
  highlightFields: string[];
  bootcamp: {
    name: string;
    hours: number;
    description: string;
  };
}

export interface PortfolioData {
  profile: ProfileInfo;
  tracks: CareerTrack[];
  courses: Course[];
  projects: Project[];
}