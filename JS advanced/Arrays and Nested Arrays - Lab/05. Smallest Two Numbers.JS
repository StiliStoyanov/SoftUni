function solve(input) {
    input.sort(function(a, b){return a - b});
    console.log(input[0], input[1]);
}
solve([30, 15, 50, 5])