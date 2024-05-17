import { ButtonProps } from '@typings/componentType';

import { ButtonContainer } from './styles';

const Button = ({ type = 'button', label, variant = 'primary', size = 'medium', onClick = () => {} }: ButtonProps) => {
  return (
    <ButtonContainer type={type} variant={variant} size={size} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};
export default Button;
