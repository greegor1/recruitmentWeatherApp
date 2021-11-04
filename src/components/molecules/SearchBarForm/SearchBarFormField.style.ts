import { Label } from 'components/atoms/Label/Label';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${Label} {
    margin: 0 20px;
  }
`;
