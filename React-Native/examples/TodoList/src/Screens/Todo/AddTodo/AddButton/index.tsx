import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  align-items: flex-end;
  justify-content: center;
`;
const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
    right: 15px;
    bottom: 15px;
`;
const Icon = Styled.Image`
  width: 40px;
  height: 40px;
`;

interface Props {
  onPress?: () => void;
}
const AddTodo = ({onPress}: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('~/Assets/Image/add.png')} />
      </ButtonContainer>
    </Container>
  );
};
export default AddTodo;
