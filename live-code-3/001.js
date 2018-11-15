// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

/**
 * AlGORITMA
 * ---------
 * 1. buat var 'countWiz' untuk menampung penambahan jika bertemu 'Pit Hitam' atau 'Nenek Penyihi'
 * 2. buat var 'countHadiah' untuk menampung penambahan jika bertemu dengan 'Hadiah'
 * 3. buat Perulangan FOR sepangjang array 'path' dimulai dengan counter i = 0
 *    a. buat Kondisi IF untuk path di index ke 'i' sama dengan pit hitam atau sama dengan 'Nenek Penyihir'
 *      a. lakukan menambahan counter untuk 'countWiz' sebanyak sekali,
 *    b. buat kondisi ELSE IF untuk path di index ke 'i' sama dengan 'Hadiah' dan nilai dari countWiz kurang dari 2
 */

function merryChristmas(path) {
  var countWiz = 0;
  var countHadiah = 0; 
  for (var i = 0; i < path.length; i++) {
    if (path[i] === 'Pit Hitam' || path[i] === 'Nenek Penyihir') {
      countWiz++;
    } else if (path[i] === 'Hadiah' && countWiz < 3) {
      countHadiah++;
    }
  }
  if (countHadiah == 0) {
    return 'unlucky, you didn\'t found single present, maybe next times'
  } else if (countWiz < 3) {
    return 'Yeaayy, you got all present: '+countHadiah;
  } else {
    return 'Be brave, next time! But it\'s okay, you got '+countHadiah+' present(s)'
  }
  //your code here
}



console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['hadiah', 'hadiah', 'hadiah', 'hadiah', 'Nenek Penyihir' ,'*', '*', '*',  'Pit Hitam', '*']));
