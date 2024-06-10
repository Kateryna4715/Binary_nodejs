import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  async getFighters(req, res) {
    try {
      const fighters = await fighterRepository.getAll();
      res.status(200).json({ fighters });
    } catch (error) {
      res.status(404).json({ error: true, message: "Something went wrong" });
    }
  }

  async getFighterById(req, res) {
    try {
      const fighterId = req.params.id;
      const fighter = await fighterRepository.getOne(fighterId);
      if (fighter) {
        res.status(200).json({ fighter });
      } else throw error;
    } catch (error) {
      res.status(400).json({ error: true, message: "Fighter not found" });
    }
  }

  async createFighter(req, res) {
    try {
      const newFighterData = req.body;
      const newFighter = await fighterRepository.create(newFighterData);
      if (newFighter) {
        res.status(200).json({
          message: "New fighter was successfully created",
          newFighter,
        });
      } else throw error;
    } catch (error) {
      res
        .status(400)
        .json({ error: true, message: "Fighter entity to create isn’t valid" });
    }
  }

  async updateFighter(req, res) {
    try {
      const fighterId = req.params.id;
      const dataToUpdate = req.body;
      const updatedFighter = await fighterRepository.update(
        fighterId,
        dataToUpdate
      );

      if (updatedFighter) {
        res.status(200).json({ fighter: updatedFighter });
      } else throw error;
    } catch (error) {
      res.status(404).json({ error: true, message: "Failed to update" });
    }
  }

  async deleteFighter(req, res) {
    try {
      const fighterId = req.params.id;
      if (fighterId) {
        await fighterRepository.delete(fighterId);
        res.status(200).json({ message: "Fighter was successfully deleted" });
      } else throw error;
    } catch (error) {
      res
        .status(400)
        .json({ message: "This fighter can not be deleted or does not exist" });
    }
  }
}

const fighterService = new FighterService();

export { fighterService };
