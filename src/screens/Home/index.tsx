import React from "react";
import {
  Container,
  HeaderContainer,
  SideBarMenu,
  Title,
  Content
} from "./styles";

const Home: React.FC = () => (
  <>
    <Container />
    <Content>
      <SideBarMenu>
        <HeaderContainer>
          <Title>Menu</Title>
        </HeaderContainer>
      </SideBarMenu>
    </Content>
  </>
);

export default Home;
