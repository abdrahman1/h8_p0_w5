/**
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
 */

 /*
 ALGORITMA menyusun object of array yang mengubah input data mentah student menjadi data student yang 
 memenuhi kriteria skor > 75 untuk dapat dimasukkan dalam output
 1. deklarasikan variabel hasil sebagai objek kosong
 2. lakukan looping dengan indeks i dimulai dari 0 dan limitnya adalah panjang array students
    2a. deklarasikan variabel kelas dengan nilainya students[i].class
    
  */

 function graduates (students) {
    var hasil = {}
    for (var i = 0; i < students.length; i++){
        var kelas = students[i].class
        if(hasil[kelas] === undefined) {
            hasil[kelas] = []
            if (students[i].score > 75) {
                var dataStudentLulus = {}
                dataStudentLulus['name'] = students[i].name
                dataStudentLulus['score'] = students[i].score
                hasil[kelas].push(dataStudentLulus)
            }            
        }
        else {
            if (students[i].score > 75) {
                var dataStudentLulus = {}
                dataStudentLulus['name'] = students[i].name
                dataStudentLulus['score'] = students[i].score
                hasil[kelas].push(dataStudentLulus)
            } 
        }  

    }
    return hasil
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
(  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // })
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}