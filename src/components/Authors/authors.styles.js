import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 70px;
`;

export const Heading = styled.h2`
  width: 100%;
  padding: 30px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
