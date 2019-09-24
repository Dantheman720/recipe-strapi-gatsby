'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  recipeByName: async ctx => {
    return strapi.services.recipe.recipeByName(ctx.request.body);
  }
};
