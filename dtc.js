var arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];
alert(`The array is [${arr}]`)
function countTypes(arr) {
    var stringsCount = 0;
    var numbersCount = 0;
    var booleansCount = 0;

    function countElements(element) {
        if (Array.isArray(element)) {
            for (const item of element) {
                countElements(item);
            }
        } else if (typeof element === 'string') {
            stringsCount++;
        } else if (typeof element === 'number') {
            numbersCount++;
        } else if (typeof element === 'boolean') {
            booleansCount++;
        }
    }

    countElements(arr);
    alert(`Total no of Strings = ${stringsCount}\nTotal no of Numbers =${numbersCount}\nTotal no of Booleans = ${booleansCount}`);
}
countTypes(arr);