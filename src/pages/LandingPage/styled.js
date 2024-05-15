import styled from "styled-components";

export const BodyPage = styled.body`
  background-color: #0a2e36;
  display: flex;
  flex-direction: column;

  * {
    background-color: #0a2e36;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: lightblue;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 10px;
    border: 2px solid lightblue;
  }

  .table-container {
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
  }

  .button-to-top-container {
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
  }
`;

export const ProjectsLink = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 190px;
  background-color: #14cc60;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    box-shadow: -5px 5px 0px 0px rgba(20, 204, 96, 0.7);
  }
`;

export const Presentation = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin: 100px 30% 10px 70px;
  overflow: visible;
`;

export const AboutMeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-top: 100px;

  span {
    background-color: rgba(000, 000, 000, 0.2);
    border-radius: 10px;
    padding: 10px 40px;
  }
`;

export const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 0px;
  padding: 110px 5%;
  background-color: #0a2e36;

  div {
    background-color: rgba(000, 000, 000, 0.2);
    border-radius: 10px;
    padding: 30px 40px;
  }

  p {
    background-color: transparent;
  }
`;

export const TecnologiesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-top: 0px;
  padding-bottom: 110px;
  overflow: visible;
  background-color: #0a2e36;

  span {
    background-color: rgba(000, 000, 000, 0.2);
    border-radius: 10px;
    padding: 10px 40px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
  }

  thead tr th {
    color: #ffffff;
    font-size: 20px;
    border-bottom: 1px solid #ffffff;
  }

  tbody tr th {
    color: #ffffff;
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  th {
    padding-bottom: 30px;
    border-radius: 10px;
  }

  th img {
    width: 50px;
    height: 50px;
  }

  .icone {
    border-left: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    width: 50px;
    height: 50px;
  }

  .tempoUso {
    border-left: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  .nProjetos {
    border-left: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  .dominio {
    border-left: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  .projetos {
    border-left: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;
`;

export const ButtonToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50vh;
  border: none;
  background-color: #09a129;
  box-shadow: 0 0 2px 2px #09a129;
  padding: 2px;

  &:hover {
    background: linear-gradient(to right, blue, red);
  }

  svg {
    background-color: transparent;
    fill: white;
  }

  .inButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50vh;
    border: none;
    background-color: #09a129;
    box-shadow: 0 0 2px 2px #09a129;
  }
`;

export const Footer = styled.footer`
  text-align: center;

  .contact-title {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 30px;
    color: #ffffff;
  }

  .footer-information {
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 50px;

    span {
      padding-right: 10px;
    }
  }

  .email-title {
    font-weight: bold;
  }

  .number-title {
    font-weight: bold;
  }

  .linkedin-title {
    font-weight: bold;
  }
`;
