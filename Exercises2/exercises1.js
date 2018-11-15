function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var person = {};
        person.penumpang = arrPenumpang[i][0];
        person.naikDari = arrPenumpang[i][1];
        person.tujuan = arrPenumpang[i][2];
        var countJarak = -1;
        var bayar = false;
        for(var j = 0; j < rute.length; j++) {
            if (rute[j] == person.naikDari) {
                bayar = true;
            }
            if (bayar === true) {
                countJarak++
            }
            if (rute[j] == person.tujuan) {
                person.bayar = countJarak*2000;
            }
        }
        hasil.push(person);
    }
    return hasil;
    
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]