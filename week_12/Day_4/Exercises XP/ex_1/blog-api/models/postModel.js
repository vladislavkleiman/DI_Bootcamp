const db = require("./db.js");

const getAllPosts = () => {
  return db.select("*").from("posts");
};

const getPostById = (id) => {
  return db.select("*").from("posts").where({ id });
};

const createPost = (title, content) => {
  return db.insert({ title, content }).into("posts").returning("*");
};

const updatePost = (id, title, content) => {
  return db("posts").where({ id }).update({ title, content }).returning("*");
};

const deletePost = (id) => {
  return db("posts").where({ id }).del();
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
