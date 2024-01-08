// Function

// f(x) = x + 1

// function hello(a, b){
//     console.log(a);
//     console.log(b);
//     let data = a + b
//     // console.log(data);

//     let hasil = []
//     return hasil
// }

// hello(2,)
// console.log(hello());


// cek ongkir
// user akan memasukan nama wilayahnya
// jawa barat 10000
// jawa timur 15000
// output jumlah ongkir untuk wilayah 10000

// function cekOngkir(wilayah){
//     let hasil
//     if(wilayah === "jawa barat"){
//         // console.log(`jumlah ongkir untuk ${wilayah} 10000`);
//         hasil = `jumlah ongkir untuk ${wilayah} 10000`
//     } else {
//         // console.log(`jumlah ongkir untuk ${wilayah} 15000`);
//         hasil = `jumlah ongkir untuk ${wilayah} 15000`
    
//     }

//     return hasil
// }

// console.log(cekOngkir("jawa timur"));
// console.log(cekOngkir("jawa barat"));


// function sayHai(name){
//     return `halo ${name.toUpperCase()}`
// }

// console.log(sayHai(100));


// buatlah function untuk mengitung diskon
// jika hari jumat diskon potongan 10000
// user memasukan nama hari

function cekDiskon(hari){
    // let diskon = 0
    // if(hari === "jumat"){
    //     diskon = 10000
    // } else {
    //     diskon = 0
    // }
    let diskon = hari === "jumat" ? 10000 : 0
    return diskon
}

console.log(cekDiskon("jumat"));




// user bayar dengan uang tunai 50000
// diskon jumat berkah
// 2 params untuk menyimpan hari sama uang si pembeli


// output
// product []
// subtotal
// diskon
// kembali

let product = [
    {
        nama: "Ultra Milk",
        harga: 6900
    },
    {
        nama: "Chitato",
        harga: 11500
    },
]

function hitungTransaksi(hari, tunai){
    let transaksi = {
        product: product,
        subtotal: product[0].harga + product[1].harga,
        diskon: 0,
        total: 0,
        tunai: tunai,
        kembali: 0
    }

    if(hari === "jumat"){
        transaksi.diskon = 10000    
    }

    transaksi.total = transaksi.subtotal - transaksi.diskon
    transaksi.kembali = tunai - transaksi.total 

    return transaksi;
}

// console.log(hitungTransaksi("senin", 50000));




// function declaration
console.log(hallo()); // bisa di panggil di atas atau di bawah
function hallo(){
    return "hallo"
}


// function expression
const sayHey = function() {
    return "Hello World"
}
console.log(sayHey()); // panggil tidak bisa di sebelum buat function

// arrow function
const tambah = (a, b) => a + b
console.log(tambah(2, 3));

const jumlahkan = (b, c) => {
    let hasil = b - c
    return hasil
}




// jika nilai lebih dari 80 nilainya A
// jika nilai lebih dari 70 - 79 nilainya B
// jika nilai lebih dari 60 - 69 nilainya C
// jika nilai lebih dari 50 - 59 nilainya D
// nilainya E

function hasilNilai(nilai){
    if (nilai >= 80) {
        grade = "A";
    } else if (70 >= nilai <= 79) {
        grade = "B";
    } else if (60 >= nilai <= 69) {
        grade = "C";
    } else if (50 >= nilai <= 59) {
        grade = "D";
    } else {
        grade = "E";
    }

    // ternary operator
    // let grade = nilai >= 80 ? "A" : 70 >= nilai <= 79 ? "B" : 60 >= nilai <= 69 ? "C" : 50 >= nilai <= 59 ? "D" : "E" 

    return grade
}
console.log(hasilNilai(72));
