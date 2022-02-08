import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    navColor: string;
    bgColor: string;
    pointColor: string;
    dateColor: string;
    borderColor: string;
    font: string;
  }
}
