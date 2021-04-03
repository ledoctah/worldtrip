import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: '#FFBA08',
    'highlight.50': '#FFBA087F',
    black: '#000000',
    white: '#FFFFFF',
    info: '#999999',
    'text.dark': '#47585B',
    'text.light': '#F5F8FA',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'text.dark',
      },
    },
  },
});
