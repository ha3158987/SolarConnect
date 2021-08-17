import styled from "@emotion/styled";

const SortedOutputBox = ({ numbers, direction }) => {
  const arrangeNumbers = () => {
    const arrangedNumberArr =
      direction === "ascending"
        ? arrangeAscendingOrder(numbers)
        : arrangeDescendingOrder(numbers);
    return addCommasToNumbers(arrangedNumberArr);
  };

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

  const addCommasToNumbers = (arr) => {
    return arr.map((num, idx) => {
      return idx < arr.length - 1 ? `${num}${", "}` : `${num}`;
    });
  };

  return (
    <SortedContainer>
      <SortedLayout>{arrangeNumbers()}</SortedLayout>
    </SortedContainer>
  );
};

const SortedContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  margin: 1rem;
`;

const SortedLayout = styled.div`
  margin: 1rem;
`;

export default SortedOutputBox;
