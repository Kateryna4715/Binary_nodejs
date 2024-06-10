import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation

  // Checking for existence
  const { name, health = 85, power, defense } = req.body;
  if (!name || !power || !defense)
    return res
      .status(404)
      .json({ error: true, message: "All fields should be filled" });

  // Checking for types
  if (
    typeof name !== "string" ||
    typeof health !== "number" ||
    typeof power !== "number" ||
    typeof defense !== "number"
  )
    return res.status(400).json({ error: true, message: "Data is not valid" });

  // Checking for length

  if (name.length < 2)
    return res.status(400).json({ error: true, message: "Name is too short" });

  // Checking for value

  if (
    power < 1 ||
    power > 100 ||
    defense < 1 ||
    defense > 10 ||
    health < 80 ||
    health > 120
  )
    return res.status(400).json({
      error: true,
      message: "Values of the fields are too high or too low",
    });

  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update

  // Checking for existence
  const { name, health = 85, power, defense } = req.body;
  if (!name || !power || !defense)
    return res
      .status(404)
      .json({ error: true, message: "All fields should be filled" });

  // Checking for types
  if (
    typeof name !== "string" ||
    typeof health !== "number" ||
    typeof power !== "number" ||
    typeof defense !== "number"
  )
    return res.status(400).json({ error: true, message: "Data is not valid" });

  // Checking for length

  if (name.length < 2)
    return res.status(400).json({ error: true, message: "Name is too short" });

  // Checking for value

  if (
    power < 1 ||
    power > 100 ||
    defense < 1 ||
    defense > 10 ||
    health < 80 ||
    health > 120
  )
    return res.status(400).json({
      error: true,
      message: "Values of the fields are too high or too low",
    });
  next();
};

export { createFighterValid, updateFighterValid };
