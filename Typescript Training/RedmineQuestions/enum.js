// console.log(getDirection(Direction.Up)); // Output: "Up"
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function getDirection(d) {
    return d;
}
console.log(getDirection(Direction.Up)); // Output: "Up"
