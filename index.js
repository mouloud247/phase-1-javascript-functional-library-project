

function myEach(collection, callBack) {

    const toArray = Object.values(collection);

    for (let i = 0; i < toArray.length; i++) {
        callBack(toArray[i]);

    }
    return collection;
}


function myMap(collection, callBack) {

    const toArray = Object.values(collection);
    const newArray = [];
    for (let i = 0; i < toArray.length; i++) {
        newArray.push(callBack(toArray[i]));

    }
    return newArray;
}

function myReduce(collection, callBack, acc = 0) {
    const toArray = Object.values(collection);
    if (acc === 0) {
        acc = toArray[0];
        for (let i = 1; i < toArray.length; i++) {
            acc = callBack(acc, toArray[i], toArray);
        }

        return acc;

    } else {

        for (let i = 0; i < toArray.length; i++) {
            acc = callBack(acc, toArray[i], toArray);
        }

        return acc;
    }

}



console.log(myReduce([1, 2, 3, 4], (acc, val, collection) => (acc + (val * 3))));


function myFind(collection, predicate) {

    const toArray = Object.values(collection);
    for (let i = 0; i < toArray.length; i++) {
        if (predicate(toArray[i]) === true) return toArray[i];

    }
    return undefined;
}


console.log(myFind([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; }))



function myFilter(collection, predicate) {
    const filterArray = [];
    const toArray = Object.values(collection);
    for (let i = 0; i < toArray.length; i++) {

        if (predicate(toArray[i])) filterArray.push(toArray[i]);

    }
    return filterArray;

}

function mySize(collection) {
    const toArray = Object.values(collection);
    return toArray.length;

}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}


function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        const newArray = [];
        for (let i = array.length - n; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}

function myKeys(collection) {
    const toArray = Object.keys(collection)
    return toArray;
}

function myValues(collection) {
    const toArray = Object.values(collection)
    return toArray;
}

