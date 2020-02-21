
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined ) return [];
  let result = [];
  matrix.forEach((element, i) => {
    if(i % 2 == 0) {
      result = [...result, ...element];
    } else {
      result = [...result, ...element.reverse()];
    }
  });
  return result;
}
