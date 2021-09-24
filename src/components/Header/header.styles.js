import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 75px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 50px;
  }
`;
