/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';

import { FaCheckCircle } from 'react-icons/fa';

import BenchPress from '../../assets/animations/bench_press.mp4';

import { Container, VideoWrapper, InfoWrapper } from './styles';

export default function BenchPressSection() {
  const [reps, setReps] = useState(7);
  const videoRef = useRef(null);

  const myInformations = [
    <p>
      Mas agora vamos ficar menos sérios! Role para baixo para continuar.
    </p>,
    <p>
      Hoje minha stack é composta toda por JavaScript, onde eu utilizo ReactJS no frontend,
      NodeJS no backend e estou iniciando no desenvolvimento mobile com React Native.
    </p>,
    <p>
      Nesse meio tempo comecei a me aventurar pelo JavaScript e foi aí que eu decidi: era
      com isso que eu queria trabalhar dali em diante.
      </p>,
    <p>
      Liderei o desenvolvimento de um deles, um ERP grande e complexo, além de ter auxiliado em um
      app para Frente de Caixa e outros projetos internos.
    </p>,
    <>
      <p>
        Falando sobre a carreira, iniciei no final de 2015 um estágio onde posteriormente fui
        efetivado como desenvolvedor PHP trabalhando em softwares voltados a gestão de
        supermercados.
      </p>
    </>,
    <>
      <p>
        Entrei em Engenharia da Computação para dois semestres depois ver que aquilo não tinha nada
        a ver com o que eu queria.
      </p><br />
      <p>
        Foi aí que mudei para Análise e Desenvolvimento de Sistemas, que estou cursando atualmente.
      </p>
    </>,
    <>
      <p>
        Comecei os estudos de programação em 2014 no Curso Técnico da QI. Lá eu percebi que
        realmente gostava da coisa e quis me aprofundar.
      </p><br />
      <p>
        E aparentemente eu fui pelo caminho errado.
      </p>
    </>,
    <>
      <p>
        Me chamo Gabriel, tenho 23 anos e sou desenvolvedor web, apaixonado por tecnologia,
        música e bodybuilding (:
      </p><br />
      <p>
        Complete a série de repetições clicando no botão verde.
      </p>
    </>,
  ];

  function doRepetition(event) {
    event.preventDefault();

    if (reps === 0) return;

    videoRef.current.playbackRate = 2;
    videoRef.current.play();
    setReps(reps - 1);
  }

  function repetitionCounter() {
    if (reps > 1) {
      return <p>Restam {reps} repetições!</p>;
    }

    if (reps > 0) {
      return <p>Resta {reps} repetição!</p>;
    }

    return <p><FaCheckCircle size="2em" />Muito bem!</p>;
  }

  return (
    <Container>
      <VideoWrapper>
        <video ref={videoRef}>
          <source src={BenchPress} type="video/mp4" />
        </video>

        <div>
          {reps > 0
            && (
              <button type="button" onClick={doRepetition}>
                Fazer repetição
              </button>
            )}
          {repetitionCounter()}
        </div>
      </VideoWrapper>
      <InfoWrapper>
        {myInformations[reps]}
      </InfoWrapper>
    </Container>
  );
}
