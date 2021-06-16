import { Button, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import Info from './Info';

type ContinentInfoProps = {
  countries: number;
  languages: number;
  hundredPlusCities: number;
};

export default function ContinentInfo({
  countries,
  hundredPlusCities,
  languages,
}: ContinentInfoProps) {
  return (
    <Flex
      justify="space-between"
      align={{ md: 'center' }}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 12 }}
    >
      <Info number={countries} subtitle="países" />
      <Info number={languages} subtitle="línguas" addMarginLeft />
      <Info number={hundredPlusCities} subtitle="cidades +100" addMarginLeft>
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
