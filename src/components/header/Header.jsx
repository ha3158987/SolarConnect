import styled from "@emotion/styled";
import { ReactComponent as Logo } from "icons/logo.svg";

const Header = () => {
  return (
    <HeaderLayout>
      <Logo />
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  margin: 1.5rem;
`;

export default Header;
