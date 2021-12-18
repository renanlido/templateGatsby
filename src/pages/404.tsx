import React from "react"
import styled from "styled-components";
import { PageProps } from "gatsby";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

`;


const NotFound: React.FC<PageProps> = () => (
  <Container>
    <h1>Você está aqui!</h1>
    <h2>Mas nada foi encontrado para você #404</h2>
  </Container>
)

export default NotFound
