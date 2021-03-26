function match(arr, jsonData) {
    let flage;

    let arr2 = [];
    for (let i in jsonData) {
        arr2.push(i);
    }

    if (JSON.stringify(arr) === JSON.stringify(arr2))
        flage = true;
    else
        flage = false;

    // console.log(flage);
    return flage;

}

function findA(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('a') || arr[i].includes('A'))
            ans.push(arr[i]);
    }
    // console.log(ans);
    return ans;
}

function missing(arr, jsonData) {
    let arr2 = [];
    for (let i in jsonData) {
        arr2.push(i);
    }

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr2.includes(arr[i]))
            continue;
        else {
            ans.push(arr[i]);
        }

    }
    return ans;
}

// isThere(['2013-01-21', '2013-01-22'], { "2013-01-21": 1, "2013-01-22": 7 });
//findA(['English', 'Urdu', 'Bengali', 'djhfv', 'ajh']);
//missing(['a', 'b', 'c'], { a: '1', b: 'b' });

module.exports = {
    match: match,
    findA: findA,
    missing: missing
}