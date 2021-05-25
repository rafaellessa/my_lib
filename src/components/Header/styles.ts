import styled from 'styled-components';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../utils/theme';

export const ContainerView = styled(Container)`
  background-color: ${theme.colors.primary};
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${theme.colors.secondary};
`;

export const LogoContainer = styled.div``;

export const LogoLib = styled.img`
  width: 120px;
  height: 120px;
`;

export const HeaderView = styled(Nav)`
  .item {
    color: green;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  width: 90%;
  border: none;
  height: 45px;
  padding: 0 15px 0 15px;
  color: ${theme.colors.secondary};

  :focus {
    outline: none;
  }
`;

export const HeaderItem = styled(Nav.Item)``;

export const UserInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
export const UserInfo = styled.span``;
export const UserIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${theme.colors.secondary};
`;
