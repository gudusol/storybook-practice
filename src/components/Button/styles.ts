import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { Colors } from '@styles/colors.ts';
import { ButtonContainerProps } from '@typings/componentType';

interface CssType extends Record<string, string | SerializedStyles> {}

export const ButtonVariants: CssType = {
  primary: css`
    background-color: ${Colors.Primary01};
    border: 1px solid ${Colors.Primary01};
    color: ${Colors.White};

    & > span.icon {
      color: ${Colors.White};
    }
  `,
  outline: css`
    background-color: ${Colors.White};
    border: 1px solid ${Colors.Primary01};
    color: ${Colors.Primary01};

    & > span.icon {
      color: ${Colors.Primary01};
    }
  `,
  disabled: css`
    background-color: ${Colors.Primary02};
    opacity: 0.5;
    border: 1px solid ${Colors.Primary02};
    color: ${Colors.White};

    & > span.icon {
      color: ${Colors.White};
    }
  `,
};
export const ButtonSizes: CssType = {
  small: css`
    border-radius: 0.4rem;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  `,
  medium: css`
    border-radius: 0.6rem;
    font-size: 1.6rem;
    padding: 0.6rem 1.2rem;
  `,
  large: css`
    border-radius: 0.8rem;
    font-size: 2rem;
    padding: 0.8rem 1.6rem;
  `,
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  ${(props) => props.variant && ButtonVariants[props.variant]}
  ${(props) => props.size && ButtonSizes[props.size]}
`;
