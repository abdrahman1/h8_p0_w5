/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/

function uniqueDuplicateFinder(kalimat) {

  var newKalimat = kalimat.toLowerCase();
  var kataTemp = '';
  var arrKata = [];
  var obj  = {}
  // menjadikan kalimat string jadi array
  for (var i = 0; i < newKalimat.length; i++) {
    if (newKalimat[i] !== ' ') {
      kataTemp += newKalimat[i]
    } else if (newKalimat[i] == ' ') {
      arrKata.push(kataTemp);
      kataTemp = '';
    }    
  }
  arrKata.push(kataTemp)
  // console.log(arrKata)
  // memisahkann element array ke unique atau duplicat
  var unique = [];
  var duplicate = [];
  for (var i = 0; i < arrKata.length; i++) {
    var isSame =false;
    for (var j = 0; j < arrKata.length; j++) {
      if (i !== j) {
        if (arrKata[i] === arrKata[j]) {
          isSame = true;
        }
      }
    }
    if (isSame == false) {
      unique.push(arrKata[i])
    } else {
      duplicate.push(arrKata[i])
    }
  } 
  // console.log(unique); //console.log(duplicate);
  // menghapus double di array duplicat
  var arrNotDouble = [];
  var doubleTemp = ''
  for (var i = 0; i < duplicate.length; i++) {
    var isDouble = false;
    for (var j = 0; j < arrNotDouble.length; j++) {
      if (duplicate[i] === arrNotDouble[j]) {
        isDouble = true;
        index = j
      }
    }
    if (isDouble === false) {
      arrNotDouble.push(duplicate[i])
    }
  }

  // membuat key unique dan duplikat untuk object obj dengan value unique dan arrNotDoubel
  if (kalimat.length == 0) {
      obj.unique = [];
      obj.duplicate = [];
  } else {
      obj.unique = unique;
      obj.duplicate = arrNotDouble;
  }
  return obj;
}
  // only code here!

console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }

console.log(uniqueDuplicateFinder('john is coding')); // ['john', 'is', 'coding', 'and', 'he']
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueDuplicateFinder(''));
// {
//   unique: [],
//   duplicate: []
// }
