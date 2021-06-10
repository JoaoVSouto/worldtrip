import { Image, Text } from '@chakra-ui/react';

type ImageData = {
  src: string;
  alt: string;
};

type SlideItemProps = {
  img: ImageData;
  title: string;
  description: string;
};

export default function SlideItem({ description, img, title }: SlideItemProps) {
  return (
    <>
      <Image
        src={img.src}
        alt={img.alt}
        objectFit="cover"
        h="100%"
        w="100%"
        position="absolute"
        css={{ filter: 'brightness(0.3)' }}
        zIndex="-1"
      />
      <Text
        as="strong"
        color="gray.50"
        fontWeight="bold"
        fontSize={{ base: '2xl', md: '3xl', lg: '6xl' }}
        mt={12}
      >
        {title}
      </Text>
      <Text
        color="gray.200"
        fontWeight="bold"
        fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }}
        mt={{ base: 9, md: 4, lg: 4 }}
      >
        {description}
      </Text>
    </>
  );
}
