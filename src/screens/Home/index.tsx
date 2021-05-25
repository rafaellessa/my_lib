import React from "react";
// import { Row, Col } from 'react-bootstrap';
import { ContainerFluid, ContainerView, Teste } from "./styles";
import Header from "../../components/Header";

const Home: React.FC = () => (
  <ContainerFluid fluid>
    <Header />
    <section>
      <ContainerView>
        <Teste>
          <h1>Ola</h1>
        </Teste>
      </ContainerView>
    </section>
  </ContainerFluid>
);

export default Home;
