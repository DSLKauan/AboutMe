import styled, { keyframes } from "styled-components";

export const TextMain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 12%;
  top: 20%;
`;

export const Welcome = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 50px;
  color: #27fb6b;
  word-spacing: 5px;
`;

export const Complement = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  color: white;
  word-spacing: 3px;
`;

export const Projected = styled.div`
  display: flex;
  position: fixed;
  right: 2%;
  bottom: 2%;
  color: rgba(255, 255, 255, 0.1);
`;

const ButtonScale = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(-2px)
  }
`;

export const Button = styled.button`
  width: 239px;
  position: absolute;
  left: 41.5%;
  display: flex;
  justify-content: center;
  background-color: rgba(000, 000, 000, 0.3);
  color: white;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  border: #14cc60 3px solid;

  &:hover {
    animation: ${ButtonScale} 0.2s forwards;
    box-shadow: -7px 7px 0px 0px #14cc60;
  }
`;
