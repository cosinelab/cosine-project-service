import { Request, Response } from 'express';
import { createProject, getAllProjects } from '../models/projectModel';

export const createProjectHandler = async (req: Request, res: Response) => {
  const { project_name, description, owner_id } = req.body;
  try {
    const project = await createProject({ project_name, description, owner_id });
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project' });
  }
};

export const getAllProjectsHandler = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
};
