/**
 * H8_P0_W5_E7
 * Melee Ranged Grouping
 */
function meleeRangedGrouping(str) {
    var arrStr = str.split(',') 
    var hasil = [[],[]]
    for (var i = 0; i < arrStr.length; i++) {
        var isRange = false;
        for (var j = 0; j < arrStr[i].length; j++) {
            if (arrStr[i][j] === '-' && arrStr[i][j+1] === 'R') {
                isRange = true;
            }
        }
        if (isRange === true) {
            var hero = arrStr[i].split('-');
            hasil[0].push(hero[0]);
        } else {
            var hero = arrStr[i].split('-');
            hasil[1].push(hero[0]);
        }
    }
    if (str.length == 0) {
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
console.log('\n');
console.log(meleeRangedGrouping('')); // []