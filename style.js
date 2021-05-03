


var robot = {
    head: prompt("input headlight"),  // голова - фонарь
    body: prompt("input barrel"),     // туловище - бочка
    arms: prompt("input pincers"),    // руки - клещи
    legs: prompt("input tracks")     // ноги - гусеницы
};

if (robot.head !== "headlight") {
    robot.head = null
}
if (robot.body !== "barrel") {
    robot.body = null
}
if (robot.arms !== "pincers") {
    robot.arms = null
}
if (robot.legs !== "tracks") {
    robot.legs = null
}

console.log(robot.head)
console.log(robot.body)
console.log(robot.arms)
console.log(robot.legs)
