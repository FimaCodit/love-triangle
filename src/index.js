/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  for(let i = 0; i< preferences.length; i++){
    (preferences[preferences[preferences[i] - 1] - 1] == i+1 && preferences[preferences[i] - 1] != i+1) ? result++ : 1;
  }

  return result / 3;
};
