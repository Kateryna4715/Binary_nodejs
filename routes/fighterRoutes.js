import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/api/fighters", responseMiddleware, async (req, res) => {
  await fighterService.getFighters(req, res);
});

router.get("/api/fighters/:id", responseMiddleware, async (req, res) => {
  await fighterService.getFighterById(req, res);
});

router.post(
  "/api/fighters",
  createFighterValid,
  responseMiddleware,
  async (req, res) => {
    await fighterService.createFighter(req, res);
  }
);

router.patch(
  "/api/fighters/:id",
  updateFighterValid,
  responseMiddleware,
  async (req, res) => {
    await fighterService.updateFighter(req, res);
  }
);
router.delete("/api/fighters/:id", responseMiddleware, async (req, res) => {
  await fighterService.deleteFighter(req, res);
});

export { router };
