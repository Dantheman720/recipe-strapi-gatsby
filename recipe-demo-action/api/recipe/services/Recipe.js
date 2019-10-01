"use strict";

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
  recipeByName: params => {
    const { variables, query } = params;
    let name = variables.name;
    return strapi
      .query("recipe")
      .find({ recipename: { $regex: ".*" + name + ".*", $options: "i" } });
  }
};
