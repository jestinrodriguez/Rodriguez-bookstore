import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 150px);
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  height: 400px;
  width: 400px;
  left: 900px;
  top: 100px;
`;

export const Author = styled.h1`
  margin: 0;
  top: 100px;
  left: 100px;
  position: absolute;
`;

export const Details = styled.h2`
  position: absolute;
  line-height: 1.4;
  font-size: 20px;
  max-width: 760px;
  top: 150px;
  left: 100px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
