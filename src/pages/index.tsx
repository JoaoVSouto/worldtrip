import Head from 'next/head';
import {
  Box,
  Divider,
  Flex,
  Text,
  UnorderedList,
  useToken,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  Lazy,
} from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Header from 'components/Header';
import Hero from 'components/Hero';
import TravelType from 'components/TravelType';
import SlideItem from 'components/SlideItem';

import styles from 'styles/swiper.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay, Lazy]);

export default function Home() {
  const yellow400 = useToken('colors', 'yellow.400');

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Header />

      <Hero />

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
          <TravelType
            label="praia"
            img={{ src: '/img/surf.svg', alt: 'Surf' }}
          />
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

      <Divider
        borderColor="gray.600"
        borderBottomWidth={{ base: 1, lg: 2 }}
        opacity="1"
        w={{ base: '60px', lg: '90px' }}
        mx="auto"
      />

      <Text
        mt={{ base: 6, lg: 12 }}
        fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
        fontWeight="medium"
        align="center"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>

      <Box
        as={Swiper}
        className={styles.swiperContainer}
        loop
        lazy
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        height={{ base: 64, md: 72, lg: 450 }}
        mt={{ base: 5, lg: 12 }}
        mb={{ base: 6, lg: 10 }}
        maxW="1240px"
        css={{
          '--swiper-navigation-color': yellow400,
          '--swiper-pagination-color': yellow400,
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="América do Norte"
            description="O segundo maior continente."
            img={{
              src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
              alt: 'Fotografia da estátua da liberdade',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="América do Sul"
            description="O continente mais tropical."
            img={{
              src: 'https://images.unsplash.com/photo-1560455974-f8f8d2927175?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
              alt: 'Fotografia aérea da praia de Copacabana',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="Ásia"
            description="O continente mais diverso."
            img={{
              src: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              alt: 'Fotografia de uma torre tailandesa vermelha e marrom',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="África"
            description="O continente mãe."
            img={{
              src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
              alt: 'Fotografia de uma árvore entre terras verdes durante o alvorecer',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="Europa"
            description="O continente mais antigo."
            img={{
              src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              alt: 'Fotografia tirada durante o dia de flores com pétalas brancas e rosas em uma grade de metal perto de casas de concreto',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SlideItem
            title="Oceania"
            description="O continente mais novo."
            img={{
              src: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
              alt: 'Fotografia da casa de ópera de Sydney',
            }}
          />
        </SwiperSlide>
      </Box>
    </>
  );
}
