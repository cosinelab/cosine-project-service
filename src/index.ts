import express from "express";
import projectRoutes from "./routes/projectRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", projectRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
