import Head from 'next/head';
import { Flex, Heading, Text, Container, SimpleGrid } from '@chakra-ui/react';

import Header from 'components/Header';
import ContinentBanner from 'components/ContinentBanner';
import ContinentInfo from 'components/ContinentInfo';
import CityCard from 'components/CityCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Europa | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner
        name="Europa"
        img={{
          src: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          alt: "Fotografia retirada durante o dia de uma cidade ao lado de um corpo d'água",
        }}
      />

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

          <ContinentInfo countries={50} languages={60} hundredPlusCities={32} />
        </Flex>

        <Heading
          as="h3"
          fontWeight="medium"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          mt={{ base: 8, md: 12, lg: 20 }}
        >
          Cidades +100
        </Heading>

        <SimpleGrid
          minChildWidth="256px"
          justifyItems="center"
          gap={{ base: 5, md: 8, lg: 12 }}
          mt={{ base: 5, md: 8, lg: 10 }}
          mb={{ base: 4, md: 6, lg: 9 }}
        >
          <CityCard
            city="Londres"
            country="Reino Unido"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia da ponte de Londres',
            }}
            countryFlag={{
              src: '/img/flags/uk.png',
              alt: 'Bandeira do Reino Unido',
            }}
          />
          <CityCard
            city="Paris"
            country="França"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia da torre Eiffel em Paris',
            }}
            countryFlag={{
              src: '/img/flags/fr.png',
              alt: 'Bandeira da França',
            }}
          />
          <CityCard
            city="Roma"
            country="Itália"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia diurna de um domo de concreto perto de uma ponte em Roma',
            }}
            countryFlag={{
              src: '/img/flags/it.png',
              alt: 'Bandeira da Itália',
            }}
          />
          <CityCard
            city="Praga"
            country="República Tcheca"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1558717907-366df4bdcac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia de uma paisagem de uma ponte indo em direção a uma cidade',
            }}
            countryFlag={{
              src: '/img/flags/cz.png',
              alt: 'Bandeira da República Tcheca',
            }}
          />
          <CityCard
            city="Amsterdã"
            country="Holanda"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: "Fotografia de um corpo d'água abaixo do céu branco",
            }}
            countryFlag={{
              src: '/img/flags/ne.png',
              alt: 'Bandeira da Holanda',
            }}
          />
          <CityCard
            city="Barcelona"
            country="Espanha"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia áerea de veículos passando entre altos prédios',
            }}
            countryFlag={{
              src: '/img/flags/es.png',
              alt: 'Bandeira da Espanha',
            }}
          />
          <CityCard
            city="Milão"
            country="Itália"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia de luzes amarradas em linhas que refletem em um rio',
            }}
            countryFlag={{
              src: '/img/flags/it.png',
              alt: 'Bandeira da Itália',
            }}
          />
          <CityCard
            city="Viena"
            country="Áustria"
            cityImage={{
              src: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256',
              alt: 'Fotografia áerea de prédios de Viena',
            }}
            countryFlag={{
              src: '/img/flags/aus.png',
              alt: 'Bandeira da Áustria',
            }}
          />
        </SimpleGrid>
      </Container>
    </>
  );
}
