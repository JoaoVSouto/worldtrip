import Head from 'next/head';
import { Divider } from '@chakra-ui/react';

import Header from 'components/Header';
import Hero from 'components/Hero';
import TravelList from 'components/TravelList';
import CallToAction from 'components/CallToAction';
import ContinentsSlider from 'components/ContinentsSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Header />

      <Hero />

      <TravelList />

      <Divider
        borderColor="gray.600"
        borderBottomWidth={{ base: 1, lg: 2 }}
        opacity="1"
        w={{ base: '60px', lg: '90px' }}
        mx="auto"
      />

      <CallToAction />

      <ContinentsSlider />
    </>
  );
}
