import styled from 'styled-components';
import { Button } from '../Button/Button';

export const SearchButton = styled(Button)`
  padding: 10px 30px;
  margin: 0 10px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;
