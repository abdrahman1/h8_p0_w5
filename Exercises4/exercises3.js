function graduates(students) {
    var hasil = {};
    for (var i = 0; i < students.length; i++) {
        console.log('==>i: ' + i);
        console.log('==>kelas: ' + students[i].class)
        if (hasil[students[i].class] === undefined) {
            console.log('===>hasil['+students[i].class+'] === undifined / kosong')
            hasil[students[i].class] = [];
        }
        if (students[i].score > 75) {
            console.log('===>'+students[i].score+' > '+75)
            console.log('===>hasil['+students[i].class+'] === tidak kosong')
            var studentLulus = {}
            console.log('===>studentLulus: '+studentLulus)
            studentLulus['name'] = students[i].name;
            studentLulus['score'] = students[i].score;
            console.log('===>name: '+students[i].name);
            console.log('===>score: '+students[i].score)
            console.log('===>studentLulus: '+studentLulus)
            hasil[students[i].class].push(studentLulus);
            // console.log('===>hasil: '+hasil)
        }
        console.log(hasil);
    }
    return hasil;
};

console.log(graduates([{
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log('\n');

// console.log(graduates([{
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