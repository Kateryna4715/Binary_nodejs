const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query

  if (req.status === 200)
    return res.status(200).json({ error: true, message: "Success" });
  if (req.status === 400)
    return res
      .status(400)
      .json({ error: true, message: "Problems with validation" });
  if (req.status === 404)
    return res.status(404).json({ error: true, message: "Data is not found" });
  next();
};

export { responseMiddleware };
