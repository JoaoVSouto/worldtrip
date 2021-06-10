import { Flex, Img } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex as="header" justify="center" align="center" py={[4, 5, 7]}>
      <Img src="/img/logo.svg" alt="world trip" w={[20, 32, 48]} />
    </Flex>
  );
}
