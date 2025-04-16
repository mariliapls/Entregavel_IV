function quicksort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const menores = arr.slice(1).filter(el => el < pivot);
    const maiores = arr.slice(1).filter(el => el >= pivot);

    return [...quicksort(menores), pivot, ...quicksort(maiores)];
}

module.exports = quicksort;
