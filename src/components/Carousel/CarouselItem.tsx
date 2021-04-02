import { Flex, Text } from '@chakra-ui/react';

export const CarouselItem: React.FC = () => {
  return (
    <Flex
      as="a"
      backgroundImage="url('/images/europe-slider.png')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      height="450"
      color="text.light"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontSize="5xl" fontWeight="bold">
        Europa
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        O continente mais antigo.
      </Text>
    </Flex>
  );
};
