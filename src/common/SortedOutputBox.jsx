import styled from "@emotion/styled";

const SortedOutputBox = () => {
  const testNumber = [2, 3, 5, 1, 2, 4];
  const testNumber2 = [2, 3, 5, 1, 2, 4];
  let temp = 0;

  // 오름차순
  const descending = () => {
    for (let i = 0; i < testNumber2.length; i++) {
      for (let j = i + 1; j < testNumber2.length; j++) {
        if (testNumber2[i] > testNumber2[j]) {
          let temp = testNumber2[i];
          testNumber2[i] = testNumber2[j];
          testNumber2[j] = temp;
        }
      }
    }
    return testNumber2;
  };

  // 내림차순
  const ascending = () => {
    for (let i = 0; i < testNumber.length; i++) {
      for (let j = i + 1; j < testNumber.length; j++) {
        if (testNumber[i] < testNumber[j]) {
          let temp = testNumber[i];
          testNumber[i] = testNumber[j];
          testNumber[j] = temp;
        }
        console.log(testNumber);
      }
    }
    return testNumber;
  };

  return (
    <SortedContainer>
      <SortedLayout>{descending()}</SortedLayout>
    </SortedContainer>
  );
};

const SortedContainer = styled.div`
  width: 100%;
  margin: 1rem;
`;

const SortedLayout = styled.div`
  margin: 1rem;
`;

export default SortedOutputBox;
