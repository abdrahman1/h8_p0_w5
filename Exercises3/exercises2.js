function highestScore(students) {
    var hasil = new Object()


    for (var i = 0; i < students.length; i++) {
        var jenisKelas = students[i].class

        if (hasil[jenisKelas] == undefined) {
            hasil[jenisKelas] = {
                'nama peserta': students[i].name,
                'score peserta': students[i].score
            }
        } 
        else if (students[i].score > hasil[jenisKelas]['score peserta']) {
            hasil[jenisKelas]['nama peserta'] = students[i].name
            hasil[jenisKelas]['score peserta'] = students[i].score
        }
        // if( )

        // var nama = students[i].name
        // hasil[kelas]['nama peserta'] = nama
        // var nilai = students[i].score
        // hasil[kelas]['nilai peserta'] = nilai
    }
    // console.log(hasil)
    // console.log(Object.keys(hasil))
    return hasil
}

// TEST CASE
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


console.log(highestScore([{
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}