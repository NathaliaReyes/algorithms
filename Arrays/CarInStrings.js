// Given an array of strings return in a new array the strings  that have the character 'd';

function CarInStrings() {
    let array = ['Dana', 'Daniel', 'Laura', 'Paula', 'Lanana', 'Dina', 'Samara', 'dan'];
    let res = [];

    for (let i = 0; i < array.length; i++) {
        if((array[i].includes('d')) || (array[i].includes('D'))) {
            res.push(array[i]);
        }
    }
    console.log(res);
}
CarInStrings();