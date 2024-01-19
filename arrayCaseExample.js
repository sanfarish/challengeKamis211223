//FizzBuzz dari data array yg diisi lewat loop for
/////////////////////////////////////////////////////////////////////////////
// const arr = [];
// for (let i = 1; i <= 1000; i++) {
//      arr.push(i);
// }
// let result = arr.map((data) => {
//     if (data % 3 == 0 && data % 5 == 0) {
//         console.log(data, 'FizzBuzz');
//     } else if (data % 3 == 0) {
//         console.log(data, 'Fizz');
//     } else if (data % 5 == 0) {
//         console.log(data, 'Buzz');
//     }
// })
/////////////////////////////////////////////////////////////////////////////

//contoh dari Kak Samsul Rijal
/////////////////////////////////////////////////////////////////////////////
// const number = [12, 23, 34, 12, 45, 56];
// let filterData = number.filter((item) => item !== 12)
// console.log(filterData);
// // expected results = [23, 34, 45, 56]
/////////////////////////////////////////////////////////////////////////////

//contoh buatan sendiri (based on Kak Samsul Rijal)
/////////////////////////////////////////////////////////////////////////////
// function myFunction ( a, b ) {
//     let filterData = a.filter((item) => item !== b)
//     return filterData;
// }
// console.log(myFunction([12, 23, 12, 45, 56], 12));
// // expected output = [23, 45, 56]
/////////////////////////////////////////////////////////////////////////////

//contoh dari JSChallenger
/////////////////////////////////////////////////////////////////////////////
// function myFunction( a, b ) {
//     return a.filter(cur => cur !== b)
// }
// console.log(myFunction([12, 23, 12, 45, 56], 12));
// // expected output = [23, 45, 56]
/////////////////////////////////////////////////////////////////////////////

//Contoh dari Mariana
/////////////////////////////////////////////////////////////////////////////
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const keyword = 'an';
// const filteredFruits = fruits.filter(fruit => fruit.includes(keyword));
// console.log(filteredFruits);
/////////////////////////////////////////////////////////////////////////////

const beasts = [ 'Bear', 'Cat', 'Dog', 'Fox', 'Goat' ];
// buat fungsi untuk hapus data dalam array yg mengandung kata tertentu
// contoh: hapus data yg mengandung kata 'at' dalam array diatas, yaitu data 'Cat' dan 'Goat'
// catatan 1: outputnya adalah array awal yg terhapus datanya, bukan buat array / variabel lain!

function keywordFilter( arr, keyword ) {
    const keywordFilterArr = arr.filter((item) => !item.includes(keyword));
    arr = keywordFilterArr; // sebelumnya: arr.splice( 0, arr.length, ...keywordFilterArr );
    return arr;
}
console.log(keywordFilter( beasts, 'at' ));

const herbs = [ 'Oregano', 'Peppermint', 'Rosemary', 'Spearmint', 'Thyme' ];
console.log(keywordFilter( herbs, 'mint' ));

const numbersOne = [ '5', '12', '66', '741', '885' ];
console.log(keywordFilter(numbersOne, 5));
// console.log(numbersOne.includes(5));

const numbersTwo = [ 5, 12, 66, 741, 885 ];
// console.log(keywordFilter(numbersTwo, 5));
// console.log(numbersTwo.includes(5));
