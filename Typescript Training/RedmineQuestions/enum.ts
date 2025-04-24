// console.log(getDirection(Direction.Up)); // Output: "Up"

enum Direction {
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}

function getDirection(d:Direction){
    return d;
}

console.log(getDirection(Direction.Up)); // Output: "Up"