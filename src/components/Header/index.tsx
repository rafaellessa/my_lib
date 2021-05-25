import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  ContainerView,
  ContainerHeader,
  LogoLib,
  SearchContainer,
  SearchInput,
  LogoContainer,
  SearchIcon,
  UserInfoContainer,
  UserInfo,
  UserIcon
} from './styles';
import logo from '../../assets/logo.png';

interface HeaderProps {
  search?: string;
  onSearch?: () => void;
}

const Header: React.FC<HeaderProps> = () => (
  <ContainerView fluid>
    <ContainerView>
      <ContainerHeader>
        <LogoContainer>
          <LogoLib src={logo} />
        </LogoContainer>
        <SearchContainer>
          <SearchInput placeholder="O que você procura?" />
          <SearchIcon icon={faSearch} />
        </SearchContainer>
        <UserInfoContainer>
          <UserIcon icon={faUser} />
          <UserInfo>{`Bem vindo,\n Rafael`}</UserInfo>
        </UserInfoContainer>
      </ContainerHeader>
    </ContainerView>
  </ContainerView>
);

export default Header;
