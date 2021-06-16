import { Box, Flex, Text } from '@chakra-ui/react';

type InfoProps = {
  number: number;
  subtitle: string;
  addMarginLeft?: boolean;
  children?: React.ReactChild;
};

export default function Info({
  number,
  subtitle,
  addMarginLeft,
  children,
}: InfoProps) {
  return (
    <Box textAlign={{ md: 'center' }} ml={addMarginLeft && { md: 4, lg: 10 }}>
      <Text
        color="yellow.400"
        fontWeight="semibold"
        fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
      >
        {number}
      </Text>
      <Flex>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight={{ md: 'semibold' }}
        >
          {subtitle}
        </Text>
        {children}
      </Flex>
    </Box>
  );
}
