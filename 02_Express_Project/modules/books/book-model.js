const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  publishedDate: { type: Date, default: Date.now() },
  pages: { type: Number, require: true },
  catagories: { type: Array, require: true },
});

module.exports = new model("books", bookSchema);
