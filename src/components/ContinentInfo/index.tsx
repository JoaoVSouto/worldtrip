import { Box, Button, Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import Info from './Info';

export default function ContinentInfo() {
  return (
    <Flex
      justify="space-between"
      align={{ md: 'center' }}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 12 }}
    >
      <Info number={50} subtitle="países" />
      <Info number={60} subtitle="línguas" addMarginLeft />
      <Info number={27} subtitle="cidades +100" addMarginLeft>
        <Tooltip
          hasArrow
          closeOnClick={false}
          label="As cidades +100 são as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo."
        >
          <Button variant="unstyled" h="auto" minW="auto" ml={1}>
            <Icon as={FiInfo} color="gray.400" opacity="0.5" />
          </Button>
        </Tooltip>
      </Info>
    </Flex>
  );
}
