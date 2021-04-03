import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

interface PresentationItemProps {
  iconName: string;
  text: string;
}

export const PresentationItem: React.FC<PresentationItemProps> = ({
  text,
  iconName,
}) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!isWideVersion) {
    return (
      <Flex align="center">
        <Box
          backgroundColor="highlight"
          width="3"
          height="3"
          borderRadius="50%"
        />
        <Text ml="4" fontWeight="semibold">
          {text}
        </Text>
      </Flex>
    );
  }

  return (
    <VStack spacing="4" flexDirection="column" align="center">
      <Image src={`/assets/${iconName}.svg`} w="16" />
      <Text fontWeight="semibold">{text}</Text>
    </VStack>
  );
};
