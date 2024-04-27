const UserSchema = require("../Schemas/User.schemas");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { respondWithError, respondWithSuccess } = require("../Utils/helpers");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserSchema.create({
      email,
      password,
      username,
      password: hashedPassword,
    });
    return res
      .status(200)
      .json(
        respondWithSuccess("Account created successfully.", { username, email })
      );
  } catch (error) {
    return res
      .status(500)
      .json(respondWithError("Internal server error.", error));
  }
  // const { email, password, username } = req.body;
  // try {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = await UserSchema.create({
  //     email,
  //     password,
  //     username,
  //     password: hashedPassword,
  //   });
  //   return res.status(200).send(respondWithSuccess({ email, username }));
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json(respondWithError(500, "Internal server error.", error));
  // }
};
