// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i > 8) {
//         break;
//     }
// }
var numbers = [12, 20, 35, 36, 71, 65, 89, 90, 100, 110];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90) {
//         break;
//     }

// }
var numbers = [12, 20, 35, 36, 71, 65, 89, 90, 100, 110];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 90) {
        continue;
    }
}


