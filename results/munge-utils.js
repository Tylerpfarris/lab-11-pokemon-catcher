
export function makeEncounteredArr(arrayOfObjects) {
    const encounteredArr = [];

    for (let item of arrayOfObjects) {
        encounteredArr.push(item.encountered);
    }

    return encounteredArr;

}

export function makeCapturedArr(arrayOfObjects) {
    const capturedArr = [];

    for (let item of arrayOfObjects) {
        capturedArr.push(item.captured);
    }

    return capturedArr;
}

export function makeLabelArr(arrayOfObjects) {
    const labelArr = [];

    for (let item of arrayOfObjects) {
        labelArr.push(item.name);
    }
    return labelArr;
}

export function makeAtkArr(arrayOfObjects) {
    const atkArr = [];

    for (let item of arrayOfObjects) {
        atkArr.push(item.attack);
    }
    return atkArr;
}
export function makeDefArr(arrayOfObjects) {
    const defArr = [];

    for (let item of arrayOfObjects) {
        defArr.push(item.defense);
    }
    return defArr;
}
// export function makeShpArr(arrayOfObjects) {
//     const shpArr = [];

//     for (let item of arrayOfObjects) {
//         shpArr.push(item.shape);
//     }
//     return shpArr;
// }
// export function makeTypeOneArr(arrayOfObjects) {
//     const typeOneArr = [];

//     for (let item of arrayOfObjects) {
//         typeOneArr.push(item.type_1);
//     }
//     return typeOneArr;
// }
// export function makeTypeTwoArr(arrayOfObjects) {
//     const typeTwoArr = [];

//     for (let item of arrayOfObjects) {
//         typeTwoArr.push(item.type_2);
//     }
//     return typeTwoArr;
// }

