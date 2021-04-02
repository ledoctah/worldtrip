import { Flex, Image, Text } from '@chakra-ui/react';
import Continent from '../../@types/Continent';

interface CarouselItemProps {
  continent: Continent;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ continent }) => {
  return (
    <Flex
      as="a"
      href={`/continent/${continent}`}
      height="450"
      color="text.light"
      direction="column"
      align="center"
      justify="center"
      position="relative"
    >
      <Flex
        backgroundImage={`url('${continent.photo_url}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        filter="brightness(0.7) blur(2px)"
      />

      <Text fontSize="5xl" fontWeight="bold" zIndex="999">
        {continent.name}
      </Text>
      <Text fontSize="xl" fontWeight="bold" zIndex="999">
        {continent.description}
      </Text>
    </Flex>
  );
};
