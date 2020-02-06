const findRecurring = arr => {
  const newArr = {};
  for (let i = 0; i < arr.length; i++) {
    if (newArr[arr[i]]) {
      return arr[i];
    }
    newArr[arr[i]] = true;
  }
};

console.log(findRecurring([2, 1, 3, 4]));
