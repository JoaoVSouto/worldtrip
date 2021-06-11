import Head from 'next/head';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
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

      <Flex h={40} justify="center" align="center" pos="relative">
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
        <Heading color="gray.50" fontWeight="semibold">
          Europa
        </Heading>
      </Flex>

      <Flex direction="column" mt={6} px={4}>
        <Text fontSize="sm" textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <Flex justify="space-between" mt={4}>
          <Box>
            <Text color="yellow.400" fontWeight="semibold" fontSize="2xl">
              50
            </Text>
            <Text fontSize="lg">países</Text>
          </Box>
          <Box>
            <Text color="yellow.400" fontWeight="semibold" fontSize="2xl">
              60
            </Text>
            <Text fontSize="lg">línguas</Text>
          </Box>
          <Box>
            <Text color="yellow.400" fontWeight="semibold" fontSize="2xl">
              24
            </Text>
            <Flex>
              <Text fontSize="lg">cidades +100</Text>
              <Popover>
                <PopoverTrigger>
                  <Button variant="unstyled" h="auto" minW="auto" ml={1}>
                    <Icon as={FiInfo} color="gray.400" opacity="0.5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    As cidades +100 são as cidades que o continente possui que
                    estão entre as 100 cidades mais visitadas do mundo.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
