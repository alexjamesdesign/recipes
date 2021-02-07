const createRecipe = require(`./gatsby/createRecipe`)
const createTag = require(`./gatsby/createTag`)


exports.createPages = async ({ actions, graphql }) => {
  await createRecipe({ actions, graphql })
  await createTag({ actions, graphql })
}