import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleLogin, handleRegister, handleGetMe } from "./routes/auth";
import { handleGetSites, handleGetSiteById, handleCreateSite } from "./routes/sites";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Authentication routes
  app.post("/api/auth/login", handleLogin);
  app.post("/api/auth/register", handleRegister);
  app.get("/api/auth/me", handleGetMe);

  // Sites routes
  app.get("/api/sites", handleGetSites);
  app.get("/api/sites/:id", handleGetSiteById);
  app.post("/api/sites", handleCreateSite);

  return app;
}
