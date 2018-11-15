/**
 * H8_P0_W5_E7
 * Hapus Simbol (Regex)
 * 
 */
// function hapusSimbol(str) {
//     // you can only write your code here!
//     var match = str.match(/[A-Z0-9]+/gi)
//     var hasil = ''
//     console.log(match)
//     for (var i = 0; i < match.length; i++) {
//         hasil += match[i]
//     }
//     return hasil
// }

function hapusSimbol(str) {
    // you can only write your code here!
    return str.replace(/[^A-Z0-9]/gi, '');
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100cd