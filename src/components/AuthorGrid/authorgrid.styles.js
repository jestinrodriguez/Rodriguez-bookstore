import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  width: 38px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px grey;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
`;

export const Text = styled.text`
  align-self: center;
  padding-left: 20px;
  color: black;
`;

export const ItemWrapper = styled.div`
  display: relative;
  width: 350px;
  height: 76px;
  padding-top: 48px;
  padding-left: 45px;
  &:hover {
    transform: scale(1.1);
  }

  .item {
    border: 4px dashed #1c6ea4;
    opacity: 0.5;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    opacity: 0.25;
  }
`;

export const Button = styled.button`
  background-color: #e16a00;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const ItemContainer = styled.div`
  position: relative;
  right: 16px;
  bottom: 16px;
  height: 76px;
  width: 300px;
  padding-left: 16px;
  padding-top: 16px;
  box-shadow: 0px 4px 4px grey;
  background-color: white;
  border-radius: 4px;

  &:hover {
    transform: scale(1.1);
  }
`;
