import { Flex, Text } from '@chakra-ui/react';

interface ContinentInfoProps {
  value: number;
}

export const ContinentInfoComponent: React.FC<ContinentInfoProps> = ({
  value,
  children,
}) => {
  return (
    <Flex direction="column" align="center">
      <Text color="highlight" fontWeight="semibold">
        {value}
      </Text>
      <Text fontWeight="semibold" fontSize={['md', 'xl']}>
        {children}
      </Text>
    </Flex>
  );
};
