module.exports = function solveEquation(equation) {
  let valuesArr = equation.replace(/ /g, "").replace("^2", "").split("*x"); // an array of a, b, c
  let a = +valuesArr[0];
      b = +valuesArr[1];
      c = +valuesArr[2];

  let discriminant = (b * b) - 4 * a * c;
  let x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a)),
      x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));

  let solutions = [x1, x2].sort((a, b) => a - b);

  return solutions;
}
