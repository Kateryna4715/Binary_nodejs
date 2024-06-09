import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/api/users", (req, res) => {});
router.get("/api/users/:id", (req, res) => {});
router.post("/api/users", (req, res) => {});
router.patch("/api/users/:id", (req, res) => {});
router.delete("/api/users/:id", (req, res) => {});

export { router };
