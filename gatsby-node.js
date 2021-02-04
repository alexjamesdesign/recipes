const createRecipe = require(`./gatsby/createRecipe`)

exports.createPages = async ({ actions, graphql }) => {
  await createRecipe({ actions, graphql })
}