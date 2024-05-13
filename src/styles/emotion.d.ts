import '@emotion/react';
import { ColorsType, GeneratorsType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    generators: GeneratorsType;
  }
}
