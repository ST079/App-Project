const bookSchema = require("./book-model");

const create = (payload) => {
  return bookSchema.create(payload);
};

const get = () => {
  return bookSchema.find();
};

const getById = (_id) => {
  return bookSchema.findOne({ _id });
};

const updateById = (_id, payload) => {
  return bookSchema.updateOne({ _id }, payload);
};

const deleteById = (_id) => {
  return bookSchema.deleteOne({ _id });
};

module.exports = { create, get, getById, updateById, deleteById };
