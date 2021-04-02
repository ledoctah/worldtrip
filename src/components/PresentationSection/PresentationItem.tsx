import { Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';

interface PresentationItemProps {
  iconName: string;
  text: string;
}

export const PresentationItem: React.FC<PresentationItemProps> = ({
  text,
  iconName,
}) => {
  return (
    <VStack spacing="4" flexDirection="column" align="center">
      <Image src={`/assets/${iconName}.svg`} w="16" />
      <Text fontWeight="semibold">{text}</Text>
    </VStack>
  );
};
