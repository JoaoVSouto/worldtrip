import { Box, useToken } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SlideItem from './SlideItem';

import styles from './styles.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const continents = [
  {
    title: 'América do Norte',
    description: 'O segundo maior continente.',
    img: {
      src: 'https://images.unsplash.com/photo-1445023086979-7244a12345a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      alt: 'Fotografia da estátua da liberdade',
    },
  },
  {
    title: 'América do Sul',
    description: 'O continente mais tropical.',
    img: {
      src: 'https://images.unsplash.com/photo-1560455974-f8f8d2927175?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
      alt: 'Fotografia aérea da praia de Copacabana',
    },
  },
  {
    title: 'Ásia',
    description: 'O continente mais diverso.',
    img: {
      src: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      alt: 'Fotografia de uma torre tailandesa vermelha e marrom',
    },
  },
  {
    title: 'África',
    description: 'O continente mãe.',
    img: {
      src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      alt: 'Fotografia de uma árvore entre terras verdes durante o alvorecer',
    },
  },
  {
    title: 'Europa',
    description: 'O continente mais antigo.',
    img: {
      src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      alt: 'Fotografia tirada durante o dia de flores com pétalas brancas e rosas em uma grade de metal perto de casas de concreto',
    },
  },
  {
    title: 'Oceania',
    description: 'O continente mais novo.',
    img: {
      src: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      alt: 'Fotografia da casa de ópera de Sydney',
    },
  },
];

export default function ContinentsSlider() {
  const yellow400 = useToken('colors', 'yellow.400');

  return (
    <Box
      as={Swiper}
      className={styles.swiperContainer}
      loop
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
      {continents.map(continent => (
        <SwiperSlide key={continent.title} className={styles.swiperSlide}>
          <SlideItem
            title={continent.title}
            description={continent.description}
            img={continent.img}
          />
        </SwiperSlide>
      ))}
    </Box>
  );
}
