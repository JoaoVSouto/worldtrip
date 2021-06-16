import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      400: '#ffba08',
      200: 'hsla(43, 100%, 52%, 0.5)',
    },
    gray: {
      600: '#47585b',
      400: '#999',
      200: '#dadada',
      50: '#f5f8fa',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
        overflowX: 'hidden',
      },
    },
  },
});
