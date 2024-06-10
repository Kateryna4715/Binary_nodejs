import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  async getUsers(req, res) {
    try {
      const users = await userRepository.getAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(404).json({ error: true, message: "Something went wrong" });
    }
  }

  async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await userRepository.getOne(userId);
      if (user) {
        res.status(200).json({ user });
      } else throw error;
    } catch (error) {
      res.status(400).json({ error: true, message: "User not found" });
    }
  }

  async createUser(req, res) {
    try {
      const newUserData = req.body;
      const newUser = await userRepository.create(newUserData);
      if (newUser) {
        res
          .status(200)
          .json({ message: "New user was successfully created", newUser });
      } else throw error;
    } catch (error) {
      res
        .status(400)
        .json({ error: true, message: "User entity to create isn’t valid" });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const dataToUpdate = req.body;
      const updatedUser = await userRepository.update(userId, dataToUpdate);

      if (updatedUser) {
        res.status(200).json({ user: updatedUser });
      } else throw error;
    } catch (error) {
      res.status(404).json({ error: true, message: "Failed to update" });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      if (userId) {
        await userRepository.delete(userId);
        res.status(200).json({ message: "User was successfully deleted" });
      } else throw error;
    } catch (error) {
      res
        .status(400)
        .json({ message: "This user can not be deleted or does not exist" });
    }
  }
}

const userService = new UserService();

export { userService };
