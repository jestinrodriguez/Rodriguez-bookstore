import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 150px);
  position: relative;
`;

export const Image = styled.img`
  width: 305px;
  position: absolute;
  top: 100px;
  left: 200px;
  height: auto;
`;

export const Title = styled.h1`
  margin: 0;
  position: absolute;
  top: 100px;
  left: 600px;
`;

export const Author = styled.h3`
  position: absolute;
  margin: 0;
  top: 150px;
  left: 600px;
`;

export const Details = styled.div`
  position: absolute;
  line-height: 1.4;
  font-size: 20px;
  max-width: 760px;
  top: 200px;
  left: 600px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
