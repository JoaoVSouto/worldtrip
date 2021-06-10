import { Image, ListItem } from '@chakra-ui/react';

type ImageData = {
  src: string;
  alt: string;
};

type TravelTypeProps = {
  label: string;
  img: ImageData;
};

export default function TravelType({ img, label }: TravelTypeProps) {
  return (
    <ListItem
      d={{ base: 'list-item', lg: 'flex' }}
      flexDirection="column"
      fontSize={{ base: 'large', md: 'larger', lg: '2xl' }}
      fontWeight={{ base: 'medium', lg: 'semibold' }}
      textAlign="center"
      _before={{
        base: {
          content: '""',
          bgColor: 'yellow.400',
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '1rem',
        },
        lg: {
          position: 'absolute',
          opacity: 0,
        },
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        mx="auto"
        mb={6}
        display={{ base: 'none', lg: 'block' }}
        flex="1"
      />
      {label}
    </ListItem>
  );
}
