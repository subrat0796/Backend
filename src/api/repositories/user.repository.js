const User = require("../models/user.model");

const create = async (payload) => {
  return await User.create(payload);
};

const find = async (query, projection = {}, lean = false) => {
  return await User.find(query).select(projection).lean(lean);
};

const findOne = async (query, projection = {}, lean = false) => {
  return await User.findOne(query).select(projection).lean(lean);
};

const findById = async (id, projection = {}, lean = false) => {
  return await User.findById(id).select(projection).lean(lean);
};

const findByIdAndUpdate = async (id, payload) => {
  return await User.findByIdAndUpdate(id, payload);
};

module.exports = {
  create,
  find,
  findOne,
  findById,
  findByIdAndUpdate,
};
