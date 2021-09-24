import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const titleCloseBtn = styled.button`
  display: flex;
  justify-content: flex-end;

  .btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;
