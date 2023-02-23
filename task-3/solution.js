const findSmallest = (array) => {
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
};

const example = [2, 5, 8, 10, 33, 55, 1, 7, 100, 30];

console.log(findSmallest(example));
