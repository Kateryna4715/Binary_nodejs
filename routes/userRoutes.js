import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/api/users", responseMiddleware, async (req, res) => {
  await userService.getUsers(req, res);
});
router.get("/api/users/:id", responseMiddleware, async (req, res) => {
  await userService.getUserById(req, res);
});
router.post(
  "/api/users",
  createUserValid,
  responseMiddleware,
  async (req, res) => {
    await userService.createUser(req, res);
  }
);

router.patch(
  "/api/users/:id",
  updateUserValid,
  responseMiddleware,
  async (req, res) => {
    await userService.updateUser(req, res);
  }
);
router.delete("/api/users/:id", responseMiddleware, async (req, res) => {
  await userService.deleteUser(req, res);
});

export { router };
