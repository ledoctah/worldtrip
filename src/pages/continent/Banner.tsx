import { Flex, Text } from '@chakra-ui/react';

interface BannerProps {
  continentName: string;
  photo_url: string;
}

export const Banner: React.FC<BannerProps> = ({ continentName, photo_url }) => {
  return (
    <Flex position="relative" height="500" justify="center" p="8">
      <Flex
        backgroundImage={`url('${photo_url}')`}
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
        filter="brightness(0.6)"
      />

      <Flex w="100%" maxWidth="1200px" justify="space-between">
        <Text
          zIndex="999"
          fontSize="4xl"
          color="text.light"
          fontWeight="semibold"
          mt="auto"
          mb="14"
        >
          {continentName}
        </Text>
      </Flex>
    </Flex>
  );
};
