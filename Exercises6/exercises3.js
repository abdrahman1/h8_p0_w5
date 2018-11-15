/**
 * H8_P0_W5_E7
 * Melee Ranged Grouping
 */
function meleeRangedGrouping(str) {
    var arrStr = str.split(',')
    var hasil = [[],[]]
    console.log('=>'+hasil);
    console.log('=>'+arrStr);
    for (var i = 0; i < arrStr.length; i++) {
        console.log('==>i: '+i)
        var isRange = false;
        console.log('==>isRange: '+isRange)
        for (var j = 0; j < arrStr[i].length; j++) {
            console.log('===>j: '+j)
            if (arrStr[i][j] === '-' && arrStr[i][j+1] === 'R') {
                console.log('===>arrStr['+i+']: '+arrStr[i])
                isRange = true;
                console.log('===>isRange: '+isRange);
            }
        }
        if (isRange === true) {
            console.log('====>isRange: '+isRange);
            var hero = arrStr[i].split('-');
            console.log('====>hero: '+hero);
            hasil[0].push(hero[0]);
            console.log('====>hero[0]: '+hero[0]);
            console.log(hasil);
        } else {
            console.log('====>isRange: '+isRange)
            var hero = arrStr[i].split('-');
            console.log('====>hero: '+hero);
            hasil[1].push(hero[0]);
            console.log('====>hero[0]: '+hero[0]);
            console.log(hasil);

        }
    }
    if (str == '') {
        return '[]';
    } else {
        return hasil;
    }
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log('\n');
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []