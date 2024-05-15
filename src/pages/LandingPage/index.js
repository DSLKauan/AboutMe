import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import {
  BodyPage,
  Presentation,
  ProjectsLink,
  AboutMeTitle,
  AboutMeText,
  TecnologiesTitle,
  Table,
  Footer,
  Hr,
  ButtonToTop,
} from "./styled";

const html5Icon = require("../../images/Icons/html5.png");
const css3Icon = require("../../images/Icons/css3.png");
const jsIcon = require("../../images/Icons/js.png");
const tsIcon = require("../../images/Icons/ts.png");
const reactIcon = require("../../images/Icons/react.png");
const nodejsIcon = require("../../images/Icons/nodejs.png");
const expressIcon = require("../../images/Icons/express.png");
const mysqlIcon = require("../../images/Icons/mysql.png");

export default function LandingPage() {
  useEffect(() => {
    function toTop() {
      const toTopButton = document.querySelector(".inButton");
      toTopButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    toTop();
  }, []);

  const intervalCheck = setInterval(() => {
    const cursor = document.querySelector(".Typewriter__cursor");

    if (cursor) {
      cursor.parentNode.removeChild(cursor);
      clearInterval(intervalCheck);
    }
  }, 100);

  return (
    <BodyPage>
      <Presentation>
        <div>
          <Typewriter
            options={{
              strings: [
                "É um prazer tê-lo(a) aqui. Meu nome é Kauan e este é o meu portfólio, onde compartilho um pouco do meu trabalho e projetos. Fique à vontade para explorar e conhecer mais sobre mim e o que faço.",
              ],
              autoStart: true,
              loop: false,
              delay: 30,
              deleteSpeed: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
            }}
          />
        </div>
      </Presentation>
      <ProjectsLink>Projetos</ProjectsLink>
      <AboutMeTitle>
        <span>Sobre mim</span>
      </AboutMeTitle>
      <AboutMeText>
        <div>
          <p>
            Meu nome é Kauan e sou um entusiasta da tecnologia, apaixonado por
            criar experiências digitais incríveis. Com mais de cinco anos de
            experiência como desenvolvedor web, tenho trabalhado em uma
            variedade de projetos, desde sites institucionais até aplicativos
            web complexos.
          </p>
          <br />
          <p>
            Meu objetivo é combinar design criativo com funcionalidade intuitiva
            para criar soluções que não apenas impressionem visualmente, mas
            também ofereçam uma excelente experiência ao usuário. Fora do
            trabalho, sou um amante de fotografia e adoro explorar novos lugares
            em busca da foto perfeita.
          </p>
          <br />
          <p>
            Também sou um ávido jogador de videogame nas horas vagas e adoro
            viajar sempre que possível. Neste portfólio, você encontrará uma
            seleção dos meus melhores trabalhos e projetos. Fique à vontade para
            explorar e conhecer um pouco mais sobre o meu trabalho. Se precisar
            de mais informações ou quiser entrar em contato, estou à disposição!
          </p>
        </div>
      </AboutMeText>
      <TecnologiesTitle>
        <span>Tecnologias que utilizo</span>
      </TecnologiesTitle>
      <div className="table-container">
        <Table>
          <thead>
            <tr className="head-table">
              <th>Tecnologias</th>
              <th>Tempo de uso</th>
              <th>N° de projetos</th>
              <th>Domínio</th>
              <th>Projetos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="icone">
                <img src={html5Icon} alt="HTML5" />
              </th>
              <th className="tempoUso">1 ano</th>
              <th className="nProjetos">3</th>
              <th className="dominio">Avançado</th>
              <th className="projetos">
                Agenda, Lista de Tarefas, site de E-Books.
              </th>
            </tr>
            <tr>
              <th className="icone">
                <img src={css3Icon} alt="HTML5" />
              </th>
              <th className="tempoUso">1 ano</th>
              <th className="nProjetos">3</th>
              <th className="dominio">Avançado</th>
              <th className="projetos">
                Agenda, Lista de Tarefas, site de E-Books.
              </th>
            </tr>
            <tr>
              <th className="icone">
                <img src={jsIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">8 meses</th>
              <th className="nProjetos">4</th>
              <th className="dominio">Avançado</th>
              <th className="projetos">
                Agenda, Lista de Tarefas, site de E-Books, Validador de CPF.
              </th>
            </tr>
            <tr>
              <th className="icone">
                <img src={tsIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">1 mês</th>
              <th className="nProjetos">0</th>
              <th className="dominio">Iniciante</th>
              <th className="projetos">Nenhum</th>
            </tr>
            <tr>
              <th className="icone">
                <img src={reactIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">3 meses</th>
              <th className="nProjetos">2</th>
              <th className="dominio">Intermediário</th>
              <th className="projetos">
                Agenda, Sistema de Gestão de Aluno com requisições API REST
              </th>
            </tr>
            <tr>
              <th className="icone">
                <img src={nodejsIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">3 meses</th>
              <th className="nProjetos">2</th>
              <th className="dominio">Intermediário</th>
              <th className="projetos">API REST, Agenda</th>
            </tr>
            <tr>
              <th className="icone">
                <img src={expressIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">2 meses</th>
              <th className="nProjetos">2</th>
              <th className="dominio">Intermediário</th>
              <th className="projetos">API REST, Agenda</th>
            </tr>
            <tr>
              <th className="icone">
                <img src={mysqlIcon} alt="HTML5" />
              </th>
              <th className="tempoUso">7 meses</th>
              <th className="nProjetos">1</th>
              <th className="dominio">Intermediário</th>
              <th className="projetos">Banco de dados da API REST</th>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="button-to-top-container">
        <ButtonToTop>
          <div className="inButton">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`.cls-1{fill:none;}`}</style>
              </defs>
              <g data-name="Layer 2" id="Layer_2">
                <path d="M25,14a1,1,0,0,1-.71-.29L16,5.41l-8.29,8.3a1,1,0,0,1-1.42-1.42l9-9a1,1,0,0,1,1.42,0l9,9a1,1,0,0,1,0,1.42A1,1,0,0,1,25,14Z" />
                <path d="M16,29a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V28A1,1,0,0,1,16,29Z" />
              </g>
              <g id="frame">
                <rect className="cls-1" height="32" width="32" />
              </g>
            </svg>
          </div>
        </ButtonToTop>
      </div>

      <Hr className="hr-footer" />
      <Footer>
        <div className="contact-title">Contato:</div>
        <div className="footer-information">
          <span>
            <span className="email-title">E:mail:</span>
            <span className="email">kauandsgomesl@gmail.com</span>
          </span>
          <span>
            <span className="number-title">Telefone:</span>
            <span className="number">(85) 98822-3373</span>
          </span>
          <span>
            <span className="linkedin-title">LinkedIn:</span>
            <span className="address-linkedin">
              www.linkedin.com/in/kauan-gomes-44126a222
            </span>
          </span>
        </div>
      </Footer>
    </BodyPage>
  );
}
