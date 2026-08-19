// import rawConfig from "./config.json";
// import type { PortfolioData, CareerTrackId } from "./types";

// export const portfolioData: PortfolioData = rawConfig as PortfolioData;

// export const getCoursesByTrack = (trackId: CareerTrackId) =>
//   portfolioData.courses.filter(
//     (c) => c.trackIds.includes(trackId) && !c.isFoundation
//   );

// export const getFoundationCourses = () =>
//   portfolioData.courses.filter((c) => c.isFoundation);

// export const getProjectsByTrack = (trackId: CareerTrackId) =>
//   portfolioData.projects.filter((p) => p.trackIds.includes(trackId));

// export const getTrackById = (trackId: CareerTrackId) =>
//   portfolioData.tracks.find((t) => t.id === trackId);