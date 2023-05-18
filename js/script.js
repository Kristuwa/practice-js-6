function absentNumber(array) {
  if (array.length === 1) {
    return array[0] === 1 ? 2 : 1;
  }

  if (array.length > 0) {
    const sortedArray = [...array].sort((a, b) => a - b);

    if (sortedArray[0] !== 1) return 1;
    for (let i = 1; i < sortedArray.length; i += 1) {
      if (sortedArray[i] !== sortedArray[i - 1] + 1) {
        return sortedArray[i - 1] + 1;
      }
    }
    return sortedArray[sortedArray.length - 1] + 1;
  }
  return 1;
}

console.log(absentNumber([]));
console.log(absentNumber([1]));
console.log(absentNumber([2]));
console.log(absentNumber([2, 3, 4, 5]));
console.log(absentNumber([1, 2, 3, 4]));
console.log(absentNumber([1, 2, 4, 5]));
