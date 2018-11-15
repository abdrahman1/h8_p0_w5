function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    for (var i = 0; i < arrPenumpang.length;i++) {
        var person = {};
        person.penumpang = arrPenumpang[i][0];
        person.naikDari = arrPenumpang[i][1];
        person.tujuan = arrPenumpang[i][2];
        var selisihJarak = (rute.indexOf(person.tujuan)) - (rute.indexOf(person.naikDari));
        console.log(selisihJarak);
        hasil.push(person);
        person.bayar = selisihJarak * 2000
    }
    return hasil;
}


console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));

console.log(naikAngkot([]));