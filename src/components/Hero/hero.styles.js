import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  height: calc(100vh - 80px);

  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Left = styled.div`
  display: relative;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  padding: 100px;
  align-self: center;
`;

export const Right = styled.div`
  display: flex;
  width: 50vw;
  align-self: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Title = styled.h1``;

export const Text = styled.div``;

export const Logo = styled.img`
  width: auto;
  height: 70%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 20px;
  padding-left: 50px;
`;
