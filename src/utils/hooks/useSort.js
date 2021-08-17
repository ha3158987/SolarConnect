const useSort = ({ numbers, direction }) => {
  if (!numbers.length) return [];

  const arrangeAscendingOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  };

  const arrangeDescendingOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  };

  const arrangedNumberArr =
    direction === "ascending"
      ? arrangeAscendingOrder(numbers)
      : arrangeDescendingOrder(numbers);
  return arrangedNumberArr;
};

export default useSort;
