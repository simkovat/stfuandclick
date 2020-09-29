export interface ThemeT {
  colors: Record<
    | 'background'
    | 'primary'
    | 'darkPrimary'
    | 'tableRowDark'
    | 'tableRowLight'
    | 'textGrey'
    | 'error',
    string
  >;
}

//TODO shoudl not have color names
export const defaultTheme: ThemeT = {
  colors: {
    background: '#f1f2f3',
    primary: '#4890e2',
    darkPrimary: '#3f7ec2',
    tableRowDark: '#cee5f9',
    tableRowLight: '#e4f0fe',
    textGrey: '#989898',
    error: '#dd1010',
  },
};
