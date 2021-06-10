import { useRouter } from 'next/router';
import Link from 'next/link';
import { Flex, Icon, Img, Link as ChakraLink } from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';

export default function Header() {
  const { pathname } = useRouter();

  const shouldNavigateBackAppear = pathname !== '/';

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      pos="relative"
      py={[4, 5, 7]}
    >
      {shouldNavigateBackAppear && (
        <Link href="/" passHref>
          <ChakraLink pos="absolute" left={4}>
            <Icon as={FaChevronLeft} fontSize={14} />
          </ChakraLink>
        </Link>
      )}
      <Img src="/img/logo.svg" alt="world trip" w={[20, 32, 48]} />
    </Flex>
  );
}
