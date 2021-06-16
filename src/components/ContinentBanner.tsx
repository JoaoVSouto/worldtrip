import { Flex, Heading, Image, Container } from '@chakra-ui/react';

type ImageData = {
  src: string;
  alt: string;
};

type ContinentBannerProps = {
  img: ImageData;
  name: string;
};

export default function ContinentBanner({ img, name }: ContinentBannerProps) {
  return (
    <Flex h={{ base: 40, md: 300, lg: 500 }} pos="relative">
      <Image
        src={img.src}
        alt={img.alt}
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
          {name}
        </Heading>
      </Container>
    </Flex>
  );
}
