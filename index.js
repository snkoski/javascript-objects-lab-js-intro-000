var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  /*var newRecipes = {};
  Object.assign(newRecipes, recipes, {[key]:  value*/
  return Object.assign({}, recipes, {[key]: value});
}