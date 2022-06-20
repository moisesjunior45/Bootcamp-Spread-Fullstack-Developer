// Utilizando método map com o This
console.log("MAP COM O THIS");
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg); 
}
const nums = [1, 2];
console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

// Utilizando método map sem o This
console.log("MAP SEM O THIS");
function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));
console.log(nums2);     // Não altera o valor do array original