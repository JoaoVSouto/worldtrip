import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Airplane from './Airplane';

export default function Hero() {
  return (
    <Box
      bgImage="/img/banner-bg.jpg"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center -23vw"
      px={[4, 6, 8]}
      py={[7, 8, 20]}
    >
      <Flex position="relative" maxW="1240px" mx="auto">
        <Box>
          <Heading
            color="gray.50"
            fontWeight="medium"
            fontSize={['xl', '2xl', '4xl']}
            lineHeight={[7, 8, 'base']}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.200"
            fontSize={['sm', 'md', 'larger']}
            mt={[2, 3, 5]}
            lineHeight={[5, 6, 7]}
            maxW="524px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Airplane />
      </Flex>
    </Box>
  );
}
