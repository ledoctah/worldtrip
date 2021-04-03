import { Flex, Text } from '@chakra-ui/react';

import City from '../../@types/City';

interface CityProps {
  city: City;
}

export const CityCard: React.FC<CityProps> = ({ city }) => {
  return (
    <>
      <Flex
        height="279"
        minW="256px"
        maxW="360px"
        direction="column"
        borderWidth="1px"
        borderColor="highlight.50"
        borderRadius="5px"
        mt="8"
      >
        <Flex
          backgroundImage={`url(${city.photo_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height="173"
          borderRadius="5px 5px 0 0"
        />

        <Flex justify="space-between" px="8" py="4" height="106">
          <Flex direction="column" alignContent="space-between">
            <Text fontWeight="semibold" fontSize="xl">
              {city.city}
            </Text>
            <Text fontWeight="medium" fontSize="sm" color="info" my="auto">
              {city.country}
            </Text>
          </Flex>

          <Flex
            backgroundImage={`url(${city.flag_url})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="8"
            width="8"
            borderRadius="50%"
            my="auto"
          />
        </Flex>
      </Flex>
    </>
  );
};
