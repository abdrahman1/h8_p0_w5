function meleeRangedGrouping(str) {
    var objResult = new Object();
    var newStr = str.split(',');
    for (var i = 0; i < newStr.length; i++) {
        var newStrSplit = newStr[i].split('-');
        if (objResult[newStrSplit[1]] === undefined) {
            objResult[newStrSplit[1]] = [];
        }
        objResult[newStrSplit[1]].push(newStrSplit[0]);
    }
    return Object.values(objResult);
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []