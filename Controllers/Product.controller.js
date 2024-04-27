const { respondWithError } = require("../Utils/helpers");

exports.addProduct = async (req, res) => {
  try {
    const {} = req.body;
    const product = await ProductSchema.create({});
    return res.status(200).json(product);
  } catch (error) {
    return res
      .status(500)
      .json(respondWithError("Internal server error.", error));
  }
};
