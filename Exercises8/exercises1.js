/**
 * H8 P0 W4 E1
 */


function cariPelaku(str) {
    // you can only write your code here!
    var match = str.match(/abc/g)
    console.log(match)
    return match.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2