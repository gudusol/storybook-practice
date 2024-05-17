import { FormContainer } from './styles';
import { Button } from '@components';

const Form = () => {
  return (
    <FormContainer>
      <input type="text" />
      <Button type={'submit'} label={'제출'} />
    </FormContainer>
  );
};
export default Form;
