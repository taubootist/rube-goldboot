import { blue, yellow } from "@mui/material/colors";
import { createTheme, Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Theme {
    pallette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      typography: {
        fontSize: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    pallette?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
        dark?: string;
      };
    };
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  }
}

// const primaryMain = '#0D47A1';
// const secondaryMain = '#FFB300';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
      light: blue[600],
      dark: blue[900],
    },
    secondary: {
      main: yellow[700],
      light: yellow[500],
      dark: yellow[800],
    },
  },
  typography: {
    fontSize: 13,
  },
});
// import { red } from '@mui/material/colors';
// import { adaptV4Theme, createTheme } from '@mui/material/styles';

// const theme = createTheme(
//   adaptV4Theme({
//     palette: {
//       primary: {
//         main: primaryMain,
//       },
//       secondary: {
//         main: secondaryMain,
//       },
//       error: {
//         main: red.A400,
//       },
//       background: {
//         default: '#fff',
//       },
//     },
//     typography: {
//       h4: {
//         fontSize: '1.6rem',
//       },
//       h5: {
//         fontSize: '1.3rem',
//       },
//       h6: {
//         fontSize: '1.1rem',
//       },
//       subtitle2: {
//         fontWeight: 600,
//       },
//     },
//     overrides: {
//       MuiTooltip: {
//         tooltip: {
//           fontWeight: 'normal',
//           fontSize: '.65rem',
//           letterSpacing: '.025em',
//         },
//       },
//       MuiInput: {
//         input: {
//           '&::placeholder': {
//             color: primaryMain,
//           },
//         },
//       },
//       MuiInputLabel: {
//         root: {
//           color: primaryMain,
//         },
//       },
//     },
//   }),
// );

export default theme;
