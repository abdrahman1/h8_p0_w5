function highestScore(students) {
    var hasil = {}
    for (var i = 0; i < students.length; i++) {
        var kelas = students[i].class;
        if (hasil[kelas] === undefined) {
            hasil[kelas] = {};
            hasil[kelas]['name'] = students[i].name;
            hasil[kelas]['score'] = students[i].score;
        } else if (students[i].score > hasil[kelas]['score']) {
            hasil[kelas]['name'] = students[i].name;
            hasil[kelas]['score'] = students[i].score;
        }
        console.log(hasil)
    }
    return hasil;
}
console.log(highestScore([
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    },
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
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