// console.log("Hack Nasa");
// Code berfungsi hack nasa

/* ini komentar juga */

// console.log("Haloo");

// Nama: "Adit"
// Alamat : "Tangerang"

// var namaLengkap = "Adit";
// var alamat = `Tangerang`;

// console.log('Nama saya '+ namaLengkap + ' alamat saya di' + alamat);
// console.log(`Nama saya ${namaLengkap} alamat saya di ${alamat}`);

// // deklarasi variable
// // VAR, LET, CONST

// // var bisa di deklarasi ulang
// var nama = "Abi";
// var nama = "Fadhilah";
// console.log(nama);

// // tidak bisa di deklarasi ulang
// let pekerjaan = "Programmer";
// pekerjaan = "Designer";
// console.log(pekerjaan);

// // value tetap, tidak bisa dirubah
// const alamat = "Tangerang"
// alamat = "Depok"
// console.log(alamat);

var jenisKelamin;
let jenisKelamin2;
// const jenisKelamin3;
// console.log('Sebelum di isi '+jenisKelamin);
// console.log(jenisKelamin2);
// console.log(jenisKelamin3);
// jenisKelamin = "Laki-laki";
// // console.log(jenisKelamin);


// let nama = "Farhan", alamat = "Bandung"


// let diskon = 800;
// let gratis = "nilai awal";
// // Jika saya lapar
// // saya makan
// if(diskon > 600){
//     gratis = "Minuman"
//     // console.log(gratis);
// } else {
//     gratis = "angin";
//     // console.log(gratis);
// }
// // console.log(gratis);


// //  String
// let string1 = "Hallo guys";
// let string2 = 'gimana kabarnya';
// let string3 = `baik ${string1}`;

// // number
// let umur = 25;
// // console.log(umur, typeof(umur) );

// let siswaBinar = true;

// // let hobi;
// console.log(hobi);



// Object
let dataDiriBudi = {
    nama: "Budi",
    alamat: "Jakarta",
    hobi: "Berenang"
}
let dataDiriAsep = {
    nama: "Asep",
    alamat: ["Tangerang", "Bandung"],
    hobi: "Berenang"
}

console.log(dataDiriBudi);
console.log(dataDiriBudi.nama);
console.log(dataDiriAsep);


// Array
// menyimpan data jenisnya sama
// kita mau nyimpan data merk mobil
let merkMobi1 = "Toyota"
let merkMobi2 = "Honda"
let merkMobi3 = "Nissan"
let merkMobil = ["Toyota", "Honda", "Nissan"]
// array di simpan di dalam index untuk value 
// dimulai dari 0
merkMobil[0] = "Ford"
merkMobil.push("Satu");
merkMobil.push(... ["Volvo", "Tesla"]);
console.log(merkMobil);
console.log(merkMobil[0]);
console.log(merkMobil[2]);

// Manipulai string
let data = "Nama saya Surya"
let hasil = data.replace("Surya", "Amel")
console.log(hasil);

let data2 = "Produk Rinso"
let hasil2 = data2.substring(7, 10)
console.log(hasil2);

let data3 = "Saya suka coding"
let hasil3 = data3.toLocaleLowerCase();
console.log(hasil3);

// > < == != ||