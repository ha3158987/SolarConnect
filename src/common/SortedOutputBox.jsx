import styled from "@emotion/styled";
import useSort from "utils/hooks/useSort.js";

const SortedOutputBox = ({ numbers, direction }) => {
  const addCommasToNumbers = (arr) => {
    return arr.map((num, idx) => {
      return idx < arr.length - 1 ? `${num}${", "}` : `${num}`;
    });
  };

  return (
    <SortedContainer>
      <SortedLayout>
        {addCommasToNumbers(useSort({ numbers, direction }))}
      </SortedLayout>
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
