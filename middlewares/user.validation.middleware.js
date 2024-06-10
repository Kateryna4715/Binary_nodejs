import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation

  // Checking for existence
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password)
    return res
      .status(404)
      .json({ error: true, message: "All fields should be filled" });

  // Checking for types
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof phoneNumber !== "string" ||
    typeof password !== "password"
  )
    return res.status(400).json({ error: true, message: "Data is not valid" });

  // Checking for length

  if (password.length < 3)
    return res
      .status(400)
      .json({ error: true, message: "Password is too short" });

  // Checking for gmail

  if (email.slice(-10) !== "@gmail.com")
    return res.status(400).json({
      error: true,
      message: "Your email must belongs to google mail",
    });

  // Checking for phoneNumber

  if (phoneNumber.slice(0, 5) !== "+380" || phoneNumber.length !== 13)
    return res.status(400).json({
      error: true,
      message: "Your phone number must starts with +380 and have 13 digits",
    });
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  // Checking for existence
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password)
    return res
      .status(404)
      .json({ error: true, message: "All fields should be filled" });

  // Checking for types
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof phoneNumber !== "string" ||
    typeof password !== "password"
  )
    return res.status(400).json({ error: true, message: "Data is not valid" });

  // Checking for length

  if (password.length < 3)
    return res
      .status(400)
      .json({ error: true, message: "Password is too short" });

  // Checking for gmail

  if (email.slice(-10) !== "@gmail.com")
    return res.status(400).json({
      error: true,
      message: "Your email must belongs to google mail",
    });

  // Checking for phoneNumber

  if (phoneNumber.slice(0, 5) !== "+380" || phoneNumber.length !== 13)
    return res.status(400).json({
      error: true,
      message: "Your phone number must starts with +380 and have 13 digits",
    });

  next();
};

export { createUserValid, updateUserValid };
