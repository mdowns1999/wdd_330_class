function exerciseOne(n) {

    if (n == 0) {
        return 1;
    } else {
        return n * exerciseOne(n - 1);


        //For Testing purposes to see if function is working
    }
    //For Testing purposes to see if function is working
}

console.log(exerciseOne(5));

let list = [];

function exerciseTwo(x, y) {
    if (x === y) {
        return 1;
    } else {
        list.push(x + 1);
        return exerciseTwo(x + 1, y);
    }
}

exerciseTwo(2, 9);
console.log(list);