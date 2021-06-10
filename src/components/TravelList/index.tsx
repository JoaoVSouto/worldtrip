import { Box, Flex, UnorderedList } from '@chakra-ui/react';

import TravelType from './TravelType';

export default function TravelList() {
  return (
    <Box px={[4, 6, 8]}>
      <Flex
        as={UnorderedList}
        flexWrap="wrap"
        justify={{ base: 'center', lg: 'space-between' }}
        listStyleType="none"
        css={{ gap: '1.75rem' }}
        maxW="1240px"
        mx="auto"
        mt={{ base: 9, lg: 28 }}
        mb={{ base: 9, lg: 20 }}
      >
        <TravelType
          label="vida noturna"
          img={{ src: '/img/cocktail.svg', alt: 'Coquetel' }}
        />
        <TravelType label="praia" img={{ src: '/img/surf.svg', alt: 'Surf' }} />
        <TravelType
          label="moderno"
          img={{ src: '/img/building.svg', alt: 'Prédio' }}
        />
        <TravelType
          label="clássico"
          img={{ src: '/img/museum.svg', alt: 'Museu' }}
        />
        <TravelType
          label="e mais..."
          img={{ src: '/img/earth.svg', alt: 'Planeta Terra' }}
        />
      </Flex>
    </Box>
  );
}
