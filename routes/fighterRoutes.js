import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/api/fighters", (req, res) => {});
router.get("/api/fighters/:id", (req, res) => {});
router.post("/api/fighters", (req, res) => {});
router.patch("/api/fighters/:id", (req, res) => {});
router.delete("/api/fighters/:id", (req, res) => {});

export { router };
