import { Box, Flex, Image, Text } from '@chakra-ui/react';

type ImageData = {
  src: string;
  alt: string;
};

type CityCardProps = {
  cityImage: ImageData;
  countryFlag: ImageData;
  city: string;
  country: string;
};

export default function CityCard({
  city,
  cityImage,
  country,
  countryFlag,
}: CityCardProps) {
  return (
    <Flex direction="column" w={256} borderRadius="2xl">
      <Image
        src={cityImage.src}
        alt={cityImage.alt}
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
            {city}
          </Text>
          <Text color="gray.400" mt={2}>
            {country}
          </Text>
        </Box>

        <Image
          src={countryFlag.src}
          alt={countryFlag.alt}
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
}
