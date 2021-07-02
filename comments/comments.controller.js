const commentsSchema = require("../comments/comments.model");

exports.getComments = async (req, res) => {
  try {
    let comments = await commentsSchema.find();
    res.json({
      done: true,
      comments,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the comments",
    });
  }
};

exports.addComments = async (req, res) => {
  const body = req.body;
  const id = req.id;
  try {
    const comments = new commentsSchema(req.body);
    await comments.save();
    res.json({
      done: true,
      msg: "Comment updated successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The comment could not be added",
    });
  }
};

exports.uptadeComments = async (req, res) => {
  const { body } = req;
  const { id } = body;
  //console.log(id, body);
  try {
    await commentsSchema.findByIdAndUpdate(id, body);
    res.json({
      done: true,
      msg: "Comment updated successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The comment could not be uptaded",
    });
  }
};

exports.deleteComments = async (req, res) => {
  const id = req.body.id;
  try {
    await commentsSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Comment delete successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The comment could not be deleted",
    });
  }
};
