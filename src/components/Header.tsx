import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Container,
  Flex,
  Icon,
  Img,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';

export default function Header() {
  const { pathname } = useRouter();

  const shouldNavigateBackAppear = pathname !== '/';

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      py={[4, 5, 7]}
      pos="relative"
    >
      {shouldNavigateBackAppear && (
        <Container maxW="1240px" pos="absolute">
          <Link href="/" passHref>
            <ChakraLink>
              <Icon as={FaChevronLeft} fontSize={[14, 16, 18]} />
            </ChakraLink>
          </Link>
        </Container>
      )}
      <Img src="/img/logo.svg" alt="world trip" w={[20, 32, 48]} />
    </Flex>
  );
}
