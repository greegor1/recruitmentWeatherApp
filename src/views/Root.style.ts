import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage.sunny});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
