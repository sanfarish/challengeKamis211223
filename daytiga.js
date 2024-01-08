// perbandingan

let a = 10
let b = 20
// convert string ke integer
// b = parseInt(b);

// let hasil = a = b -> merubah nilai
// let hasil = a == b -> tidak mengecek ke tipe data 
// let hasil = a === b -> mengecek sampai ke tipe datanta


// aritmatika (+, *, /, -)
// let hasil = a + b -> hasilnya jadi digabungkan bukan di jumlahkan, karena salah satu  dari variable ada tipe string
// let hasil = a - b -> kalau ini langsung di baca pengurangan
// let hasil = a / b

// console.log(hasil);
// console.log(Math.random());

// let data = 2.4
// console.log(Math.ceil(data));
// console.log(Math.max(1,3,5));
// console.log(Math.round(4.4));



// Waktu
console.log(new Date());

// Sabtu, 16 Desember 2023 19:30
// 16-12-2023 19:20
// 12/16/2023

let waktu = new Date();
let tahun = waktu.getFullYear()
let bulan = waktu.getMonth()
let tanggal = waktu.getDate()
let hari = waktu.getDay()
let jam = waktu.getHours()
let menit = waktu.getMinutes()

// Sabtu, 16 Desember 2023 20:16
let dataBulan = ['Januari','Febuari','Maret', 'Apr', 'Mei', 'Jun', 'Jul', 'Agus', 'Sep', 'Okt', 'Nop', 'Desember']
let dataHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
let hasilWaktu = `${dataHari[hari]}, ${tanggal} ${dataBulan[bulan]} ${tahun} ${jam}:${menit}`
console.log(hasilWaktu);

console.log(dataBulan[bulan]);

// git add .
// git commit -m "first commit"
// git remote add origin alamat-repo
// git push origin main


// HTML, CSS, JS
// Frontend -> HTML, CSS, JS, Framework js -> React Js, NextJs, Vue Js, Angular
// Backend -> Golang, PHP, JAVA, Javacript dll
// Fullstack -> Frontend - Backend
let test = 4 
if(test % 2 == 0){
    console.log("genap");
} else {
    console.log("ganjil");
}
