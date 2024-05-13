import styled from '@emotion/styled';
import { ButtoContainerProps } from '@typings/componentType';

export const ButtonContainer = styled.button<ButtoContainerProps>`
  width: 8rem;
  height: 4rem;
  ${({ theme }) => theme.generators.flexGenerator()};
  background-color: ${({ theme }) => theme.colors.primary01};
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;
