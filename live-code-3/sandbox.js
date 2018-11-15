function initialGroupingDescending(studentsArr) {
    // Only Code Here
    var sort = true
    while (sort) {
        sort = false
        for (let i = 0; i < studentsArr.length - 1; i++) {
            if (studentsArr[i][0] < studentsArr[i + 1][0]) {
                sort = true
                var tmp = studentsArr[i];
                studentsArr[i] = studentsArr[i + 1]
                studentsArr[i + 1] = tmp
            }
        }
    }
    console.log(studentsArr)
    var newArr = [];
    var tampung = []
    var cariHuruf = studentsArr[0][0]
    tampung.push(cariHuruf)
    console.log('==>carihuruf: ' +cariHuruf);
    console.log('==>tampung: '+tampung)
    console.log(tampung)
    for (let j = 0; j < studentsArr.length; j++) {
        console.log('===>j: '+j);
        if (studentsArr[j][0] == cariHuruf) {
            tampung.push(studentsArr[j])
            console.log('====>tampung: '+tampung)
            console.log('---------------------');
        } else {
            newArr.push(tampung);
            console.log('====>newArr: '+newArr)
            tampung = [];
            console.log('====>tampung: '+tampung)
            cariHuruf = studentsArr[j][0]
            console.log('====>cariHuruf: '+cariHuruf)
            tampung.push(cariHuruf);
            console.log('====>tampung: '+tampung)
            tampung.push(studentsArr[j])
            console.log('====>tampung: '+tampung);
            console.log('---------------------');

        }
    }
    newArr.push(tampung)
    console.log('>newArr: '+newArr)
    console.log(newArr)
    // return newArr
}
console.log(initialGroupingDescending(["Budi", "Badu", "Joni", "Jono"]));
console.log(
    initialGroupingDescending(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);