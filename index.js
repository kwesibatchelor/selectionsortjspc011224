const arr = [6, 10, 2, 5, 14, -7, 11, 0];

const selectionSort = arr => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j
        }

        if (indexOfMin !== i) {
            const temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp
        }
    }

    return arr
}

selectionSort(arr);
console.log(arr);