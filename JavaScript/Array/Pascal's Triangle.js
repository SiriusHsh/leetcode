/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var number = [];
    var pascalTriangle = new Array();

    for (var i = 1; i <= numRows; i++) {
        pascalTriangle[i] = new Array(i);
    }
    for (i = 1; i <= numRows; i++) {
        pascalTriangle[i][1] = 1;
        pascalTriangle[i][i] = 1;
    }

    for (i = 3; i <= numRows; i++)
        for (var j = 2; j < i; j++)
            pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];

    for (i = 0; i < numRows; i++) {
        pascalTriangle[i+1].shift();
        console.log(pascalTriangle[i + 1]);
        number.push(pascalTriangle[i+1]);
    }
    return number;
};