// app/projects/page.tsx

import { redirect } from 'next/navigation';
import { projectsService } from '@/lib/projectService'; // Adjust the import path if needed
import { transformStrapiProject } from '@/hooks/useProjects'; // Import your transform function

// This is a Server Component, so no "use client"
async function ProjectsRedirectPage() {
  // Fetch the projects directly on the server
  const response = await projectsService.getProjects({
    page: 1,
    pageSize: 1, // We only need the first one
    populate: "*",
  });

  // Transform the data to get the clean project object
  const projects = response.data
    .filter((project) => project !== null)
    .map(transformStrapiProject);

  // Check if any projects exist
  if (projects && projects.length > 0) {
    const firstProjectId = projects[0].id;
    // Redirect to the first project's dynamic page
    redirect(`/projects/${firstProjectId}`);
  }

  // If no projects are found, display a message
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="text-xl text-red-600">No projects found.</div>
    </main>
  );
}

export default ProjectsRedirectPage;