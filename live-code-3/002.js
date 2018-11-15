/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

/**
 * 1. buat VAR 'countDigitTiga' dengan nialai 0 untuk menampung penambahan apabila ditemukan element dari array dengan nilai tipe number dan digit 3
 * 2. buat FOR untuk pengulangan sepanjang array 'params' dengan counter i adalah 0
 *  a. buat FOR untuk pengulangan sepanjang array 'params' din indeks ke i dengan counter j adalah 0
 *    a. buat IF untuk kondisi panjang nilai dari parram di indek ke 'i' dan 'j' sama dengan 3 DAN ber-tipe data 'number'
 *      a. lakukan penambahan 'countDigitTiga' dengan 'param' di indek ke 'i' dan 'j'
 * 
 * 3. tampilkan 'countDigitTiga'   
 *  
 */

function sumThree(params) {
  //your code here;
  var countDigitTiga = 0;
  for (var i = 0; i < params.length; i++) {
    for (var j = 0; j < params[i].length; j++) {
      if (String(params[i][j]).length == 3 && typeof params[i][j] == 'number') {
        countDigitTiga += params[i][j]; 
      }     
    }
  }
  return countDigitTiga;
}
console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201, true] ])); //543
