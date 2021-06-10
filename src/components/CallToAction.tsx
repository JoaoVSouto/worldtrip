import { Text } from '@chakra-ui/react';

export default function CallToAction() {
  return (
    <Text
      mt={{ base: 6, lg: 12 }}
      fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
      fontWeight="medium"
      align="center"
    >
      Vamos nessa?
      <br /> Então escolha seu continente
    </Text>
  );
}
