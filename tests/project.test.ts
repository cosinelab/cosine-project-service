import request from "supertest";
import app from "../src/index";
import prisma from "../src/db/prisma";

describe("Project API", () => {
  // Test to create a new project
  it("should create a new project", async () => {
    const newProject = {
      project_name: "Automated Test Project",
      description: "This project was created by an automated test.",
      owner_id: 1,
    };

    const response = await request(app)
      .post("/api/projects")
      .send(newProject)
      .expect(201);

    expect(response.body).toHaveProperty("id");
    expect(response.body.project_name).toBe(newProject.project_name);
    expect(response.body.description).toBe(newProject.description);
    expect(response.body.owner_id).toBe(newProject.owner_id);
  });

  // Test to retrieve all projects
  it("should retrieve all projects", async () => {
    const response = await request(app).get("/api/projects").expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  // Close Prisma Client connection after all tests
  afterAll(async () => {
    await prisma.$disconnect();
  });
});
