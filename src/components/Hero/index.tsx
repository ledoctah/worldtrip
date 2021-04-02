import { Image, Flex, Text } from '@chakra-ui/react';

export const Hero: React.FC = () => {
  return (
    <Flex
      backgroundImage="url('/images/banner.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="space-between"
      px="48"
    >
      <Flex flexDirection="column" py="24">
        <Flex direction="column" fontSize="4xl" color="text.light">
          <Text>5 Continentes, </Text>
          <Text>infinitas possibilidades.</Text>
        </Flex>

        <Flex direction="column" color="info" fontSize="lg">
          <Text>Chegou a hora de tirar do papel a viagem que você</Text>
          <Text>sempre sonhou.</Text>
        </Flex>
      </Flex>

      <Image mb="-32" src="/assets/airplane.svg" />
    </Flex>
  );
};
