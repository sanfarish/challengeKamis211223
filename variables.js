//contoh var
var namaDepan = "Falah";
var namaBelakang = "Hasan";
var namaDepan = "Faris";
console.log ("Nama Lengkap = " + namaDepan + " " + namaBelakang);
// keluar Faris Hasan

//contoh let
let umur = 24;
umur = 25;
console.log ("Umur = " + umur);
//keluar 25

//contoh const
const integer = 2147483647;
console.log ("Integer = " + integer);
//keluar 2147483647

console.log (" ");

//contoh scope
//global scope
var choose = true;
function falseChoose () {
    //local scope
    console.log ("local 1 = ", choose);
    //keluar true
    choose = false;
    console.log ("local 2 = ", choose);
    //keluar false
}
//back to global scope
console.log ("global 1 = ", choose);
//keluar true
falseChoose ();
console.log ("global 2 = ", choose);
//keluar false

console.log (" ");

//contoh object
let laptopSpecs = {
    cpu: "intel",
    gpu: "nvidia",
    ram: 10
}
console.log (laptopSpecs);
//keluar keseluruhan value laptopSpecs
console.log (laptopSpecs.gpu);
//keluar value cpu dari laptopSpecs

console.log (" ");

//contoh array
let arrayTest = ["Alpha", "Beta", "Omega"];
console.log (arrayTest [0]);
//keluar Alpha