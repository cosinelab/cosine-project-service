import prisma from '../db/prisma';

export const createProject = async (projectData: { project_name: string, description: string, owner_id: number }) => {
  return prisma.project.create({
    data: projectData
  });
};

export const getAllProjects = async () => {
  return prisma.project.findMany();
};
