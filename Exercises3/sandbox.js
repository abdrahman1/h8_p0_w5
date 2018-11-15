function highestScore(students) {
    var jumlah = 0;
    for (var j = 0; j < students.length; j++) {
        jumlah += students[j].score;
    }
    var average = jumlah / students.length;
    // console.log(jumlah);
    // console.log(average);
    var hasil = {};
    for (var i = 0; i < students.length; i++) {
        // console.log('==>i: ' + i)
        var kelas = students[i].class
        if (hasil[kelas] === undefined) {
            hasil[kelas] = {
                'name peserta': students[i].name,
                'score peserta': students[i].score
            };
            // console.log(hasil)
        }
        else {
            hasil[kelas]['nama peserta'] = students[i].name;
            hasil[kelas]['score peserta'] = students[i].score;
        }
        console.log('===>kelas: '+kelas)
    }
    return hasil;
}
console.log(highestScore([{
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

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([{
//         name: 'Alexander',
//         score: 100,
//         class: 'foxes'
//     },
//     {
//         name: 'Alisa',
//         score: 76,
//         class: 'wolves'
//     },
//     {
//         name: 'Vladimir',
//         score: 92,
//         class: 'foxes'
//     },
//     {
//         name: 'Albert',
//         score: 71,
//         class: 'wolves'
//     },
//     {
//         name: 'Viktor',
//         score: 80,
//         class: 'tigers'
//     }
// ]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}