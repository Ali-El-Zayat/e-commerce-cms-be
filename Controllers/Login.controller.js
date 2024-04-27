const UserSchema = require("../Schemas/User.schemas");
const { respondWithError, respondWithSuccess } = require("../Utils/helpers");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(404).json(respondWithError("User not found.", error));
    }
    let passwordCheck = await user.comparePassword(password);

    if (!passwordCheck)
      return res.status(400).send({ message: "Invalid password" });

    const token = jwt.sign(
      { _id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET
    );

    return res.status(200).json(
      respondWithSuccess("Successfully logged in.", {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        token,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .json(respondWithError("Internal server error.", error));
  }
};
