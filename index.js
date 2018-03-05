var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = ({}, recipes, {[key]:  value});
  return newRecipes;
}