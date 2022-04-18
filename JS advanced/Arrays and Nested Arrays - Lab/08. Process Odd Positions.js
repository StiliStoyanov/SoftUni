function solve(arr) {
    let result = []
    for (let i = 1; i < arr.length; i+=2) {
        result.push(arr[i])
    }
    console.log(result.reverse().map(x => x*2).join(' '));
}
solve([10, 15, 20, 25])