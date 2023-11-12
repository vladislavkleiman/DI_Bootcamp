const { db } = require("./db");

const userModel = {
  addUser: async ({ username, hashedPassword }) => {
    try {
      const [newUser] = await db("users")
        .insert({
          username,
          password: hashedPassword,
        })
        .returning(["id", "username"]);
      return newUser;
    } catch (error) {
      throw error;
    }
  },

  getUserByUsername: async (username) => {
    try {
      const user = await db("users").where({ username }).first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const users = await db("users").select("id", "username");
      return users;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const user = await db("users").where({ id }).first();
      return user;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id, updateData) => {
    try {
      const [updatedUser] = await db("users")
        .where({ id })
        .update(updateData)
        .returning(["id", "username"]);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userModel;
