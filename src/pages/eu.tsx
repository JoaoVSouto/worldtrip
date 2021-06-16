import Head from 'next/head';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Container,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import Header from 'components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Europa | worldtrip</title>
      </Head>

      <Header />

      <Flex h={{ base: 40, md: 300, lg: 500 }} pos="relative">
        <Image
          src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Fotografia retirada durante o dia de uma cidade ao lado de um corpo d'água"
          objectFit="cover"
          pos="absolute"
          h="100%"
          w="100%"
          zIndex={-1}
          filter="brightness(0.5)"
        />
        <Container
          maxW="1240px"
          d="flex"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          alignItems={{ base: 'center', md: 'flex-end' }}
        >
          <Heading
            color="gray.50"
            fontWeight="semibold"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            mb={{ md: 8, lg: 14 }}
          >
            Europa
          </Heading>
        </Container>
      </Flex>

      <Container maxW="1240px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ md: 'space-between' }}
          mt={[6, 8, 12, 20]}
        >
          <Text
            fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }}
            textAlign="justify"
            maxW={{ base: 'unset', lg: 600 }}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <Flex
            justify="space-between"
            align={{ md: 'center' }}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 12 }}
          >
            <Box textAlign={{ md: 'center' }}>
              <Text
                color="yellow.400"
                fontWeight="semibold"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              >
                50
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                fontWeight={{ md: 'semibold' }}
              >
                países
              </Text>
            </Box>
            <Box textAlign={{ md: 'center' }} ml={{ md: 4, lg: 10 }}>
              <Text
                color="yellow.400"
                fontWeight="semibold"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              >
                60
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                fontWeight={{ md: 'semibold' }}
              >
                línguas
              </Text>
            </Box>
            <Box textAlign={{ md: 'center' }} ml={{ md: 4, lg: 10 }}>
              <Text
                color="yellow.400"
                fontWeight="semibold"
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
              >
                27
              </Text>
              <Flex>
                <Text
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  fontWeight={{ md: 'semibold' }}
                >
                  cidades +100
                </Text>
                <Tooltip
                  hasArrow
                  closeOnClick={false}
                  label="As cidades +100 são as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo."
                >
                  <Button variant="unstyled" h="auto" minW="auto" ml={1}>
                    <Icon as={FiInfo} color="gray.400" opacity="0.5" />
                  </Button>
                </Tooltip>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Heading as="h3" fontWeight="medium" fontSize="2xl" mt={8}>
          Cidades +100
        </Heading>

        <SimpleGrid
          minChildWidth="256px"
          justifyItems="center"
          gap={5}
          mt={5}
          mb={4}
        >
          <Flex direction="column" w={256} borderRadius="2xl">
            <Image
              src="https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256"
              alt="Fotografia da ponte de Londres"
              h={173}
              objectFit="cover"
              borderTopRadius="base"
            />

            <Flex
              justify="space-between"
              align="center"
              bg="white"
              px={6}
              pb={6}
              pt={5}
              borderWidth="1px"
              borderTopWidth={0}
              borderColor="yellow.200"
              borderBottomRadius="base"
            >
              <Box fontFamily="Barlow">
                <Text fontSize="xl" fontWeight="semibold">
                  Londres
                </Text>
                <Text color="gray.400" mt={2}>
                  Reino Unido
                </Text>
              </Box>

              <Image src="/img/flags/uk.png" alt="Bandeira do Reino Unido" />
            </Flex>
          </Flex>
          <Flex direction="column" w={256} borderRadius="2xl">
            <Image
              src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256"
              alt="Fotografia da torre Eiffel em Paris"
              h={173}
              objectFit="cover"
              borderTopRadius="base"
            />

            <Flex
              justify="space-between"
              align="center"
              bg="white"
              px={6}
              pb={6}
              pt={5}
              borderWidth="1px"
              borderTopWidth={0}
              borderColor="yellow.200"
              borderBottomRadius="base"
            >
              <Box fontFamily="Barlow">
                <Text fontSize="xl" fontWeight="semibold">
                  Paris
                </Text>
                <Text color="gray.400" mt={2}>
                  França
                </Text>
              </Box>

              <Image src="/img/flags/fr.png" alt="Bandeira da França" />
            </Flex>
          </Flex>
          <Flex direction="column" w={256} borderRadius="2xl">
            <Image
              src="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256"
              alt="Fotografia diurna de um domo de concreto perto de uma ponte em Roma"
              h={173}
              objectFit="cover"
              borderTopRadius="base"
            />

            <Flex
              justify="space-between"
              align="center"
              bg="white"
              px={6}
              pb={6}
              pt={5}
              borderWidth="1px"
              borderTopWidth={0}
              borderColor="yellow.200"
              borderBottomRadius="base"
            >
              <Box fontFamily="Barlow">
                <Text fontSize="xl" fontWeight="semibold">
                  Roma
                </Text>
                <Text color="gray.400" mt={2}>
                  Itália
                </Text>
              </Box>

              <Image src="/img/flags/it.png" alt="Bandeira da Itália" />
            </Flex>
          </Flex>
          <Flex direction="column" w={256} borderRadius="2xl">
            <Image
              src="https://images.unsplash.com/photo-1558717907-366df4bdcac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256"
              alt="Fotografia de uma paisagem de uma ponte indo em direção a uma cidade"
              h={173}
              objectFit="cover"
              borderTopRadius="base"
            />

            <Flex
              justify="space-between"
              align="center"
              bg="white"
              px={6}
              pb={6}
              pt={5}
              borderWidth="1px"
              borderTopWidth={0}
              borderColor="yellow.200"
              borderBottomRadius="base"
            >
              <Box fontFamily="Barlow">
                <Text fontSize="xl" fontWeight="semibold">
                  Praga
                </Text>
                <Text color="gray.400" mt={2}>
                  República Tcheca
                </Text>
              </Box>

              <Image
                src="/img/flags/cz.png"
                alt="Bandeira da República Tcheca"
              />
            </Flex>
          </Flex>
          <Flex direction="column" w={256} borderRadius="2xl">
            <Image
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256"
              alt="Fotografia de um corpo d'água abaixo do céu branco"
              h={173}
              objectFit="cover"
              borderTopRadius="base"
            />

            <Flex
              justify="space-between"
              align="center"
              bg="white"
              px={6}
              pb={6}
              pt={5}
              borderWidth="1px"
              borderTopWidth={0}
              borderColor="yellow.200"
              borderBottomRadius="base"
            >
              <Box fontFamily="Barlow">
                <Text fontSize="xl" fontWeight="semibold">
                  Amsterdã
                </Text>
                <Text color="gray.400" mt={2}>
                  Holanda
                </Text>
              </Box>

              <Image src="/img/flags/ne.png" alt="Bandeira da Holanda" />
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
