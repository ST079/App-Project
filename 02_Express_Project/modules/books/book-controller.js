const bookSchema = require("./book-model");

const create = (payload) => {
  return bookSchema.create(payload);
};

const get = () => {
  return bookSchema.find();
};

const getById = ({ id }) => {
  return bookSchema.findOne({ id });
};

const updateById = ({ id }, payload) => {
  return bookSchema.updateOne({ id }, payload);
};

const deleteById = ({ id }) => {
  return bookSchema.deleteOne({ id });
};

module.exports = { create, get, getById, updateById, deleteById };
