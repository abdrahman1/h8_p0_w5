function meleeRangedGrouping (str) {
    //your code here
    var buffer = [];
    var result = [[], []]
    if (str.length === 0) {
      return [];
    }
    else {
      //proses split
      var newStr = str.split(",");
      for (var i = 0; i < newStr.length; i++) {
        var bufferStr = newStr[i].split('-');
        buffer.push(bufferStr);
      }
      //proses pengelompokan
      for (var j = 0; j < buffer.length; j++) {
        if (buffer[j][1] === 'Ranged') {
          result[0].push(buffer[j][0]);
        }
        else {
          result[1].push(buffer[j][0]);
        }
      }
      return result;
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []