import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  height: 70px;
  justify-content: center;
  align-items: center;
`;
const TitleLabel = Styled.Text`
  font-size: 30px;
  color: black;
  font-weight: bold;
`;
const Icon = Styled.Image`
  height: 45px;
  width: 45px;
`;
interface Props {}
const Header = ({}: Props) => {
  return (
    <Container>
      <TitleLabel>
        <Icon source={require('~/Assets/Image/to-do.png')} />
        Todo List
      </TitleLabel>
    </Container>
  );
};

export default Header;
