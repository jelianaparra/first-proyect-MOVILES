const userSchema = require("../auth/auth.model");

exports.getUser = async (req, res) => {
  const id = req.body.id;
  try {
    let user = await userSchema.findById(id);
    res.json({
      done: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The information could not be accessed",
    });
  }
};

exports.uptadeUser = async (req, res) => {
  const body = req.body;
  const id = req.id;
  try {
    await userSchema.findByIdAndUpdate(id, body);
    res.json({
      done: true,
      msg: "Profile updated successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The username or password is incorrect",
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.body.id;
  try {
    await userSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Profile delete successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Profile could not be deleted",
    });
  }
};
