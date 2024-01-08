function sediaPayung(cuaca) {
    if (cuaca == "hujan") {
        payung = "sedia";
    } else {
        payung = "tidak sedia";
    }
    return payung
}

console.log(sediaPayung("cerah"));